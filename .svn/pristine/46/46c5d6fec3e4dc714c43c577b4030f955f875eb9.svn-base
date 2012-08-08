// ==================================================================
// Module:        GonzalesThining.js
//
// Description:	Thinning algorithm as defined in the text,
//                Digital Image processing by Gonzales & Woods, 1993.
//                Pages (492-493), 8.1.5 Skeleton of a Region.
//
//                Whole thing can be done in pixelbender but let me
//                try it out in actionscript first.
//
//                2nd implementation in javascript.  Not using while
//                loop to skeletonize.... looks like there is still
//                a defect at 1 pixel width.
//                
// Input:         Image with bounding pixels of a closed shape over
//                white backgroun.
//
// Output:        skeletonized line
//
// Author(s):     Chi T. Yeung	(cty)
//
// History:
// ==================================================================
var GonzalezThin = function() {
   this.STEP1 = "step1";
   this.STEP2 = "step2";
   
   this.P2 = 0;
	this.P4 = 2;
	this.P6 = 4;
	this.P8 = 6;
   
   this.BACKGROUND_COLOR = 255;                 // white
}

GonzalezThin.prototype.apply = function(dataDes, dataMask) {
   this.dataDes = dataDes;
   this.dataMask = dataMask;
   
   var bDeleted = false;				
   if(true==this.thinning(this.STEP1)) {
      this.deleteBorder();
      bDeleted = true;
   }

   if(true==this.thinning(this.STEP2)) {
      this.deleteBorder();
      bDeleted = true;
   }
}

GonzalezThin.prototype.thinning = function(str) {
   var bDelete = false;
			
   for (var y=1; y<this.dataDes.height-1; y++) {
      var i = y*(this.dataDes.width*4);
      for(var x=1; x<this.dataDes.width-1; x++) {
         
         // red ? only concerned with colored pixels
         if(this.dataDes.data[i]!=0||
            this.dataDes.data[i+1]!=0||
            this.dataDes.data[i+2]!=0||
            this.dataDes.data[i+3]!=0) {
            
            this.getNeighbors(x,y);
            if(this.correctCount()) {
               if(this.transition()) {
                  if(this.step(str)){
                     
                     // mark pixel to be deleted
                     this.dataMask.data[i] = 255;
                     bDelete = true;
                  }
               }
            }
         }
         i+=4;
      }
   }
   return bDelete;
}

GonzalezThin.prototype.step = function(str) {
   switch(str) {
      case this.STEP1:
         return this.step1CD();

      default:
      case this.STEP2:
         return this.step2CD();
   }
} 

GonzalezThin.prototype.deleteBorder = function() {
   for (var y=1; y<this.dataDes.height; y++) {
      var i = y*(this.dataDes.width*4);
      for(var x=1; x<this.dataDes.width; x++) {
         
         if(this.dataMask.data[i]==255){
            
            // mark it green !
               this.dataDes.data[i] = 0;
               this.dataDes.data[i+1] = 0;
               this.dataDes.data[i+2] = 0;
               this.dataDes.data[i+3] = 0;
         }
         i+=4;
      }
   }
}

GonzalezThin.prototype.getNeighbors = function(x, y) {
   var p2 = this.getValue(x,y-1);
   var p3 = this.getValue(x+1,y-1);
   var p4 = this.getValue(x+1,y);
   var p5 = this.getValue(x+1,y+1);
   var p6 = this.getValue(x,y+1);
   var p7 = this.getValue(x-1,y+1);
   var p8 = this.getValue(x-1,y);
   var p9 = this.getValue(x-1,y-1);
   
   this.listNeighbors = [p2, p3, p4, p5, p6, p7, p8, p9];
}

GonzalezThin.prototype.getValue = function(x, y) {
   var i = y*(this.dataDes.width*4) + (x*4);
   if(this.dataDes.data[i]!=0|| 
      this.dataDes.data[i+1]!=0||  
      this.dataDes.data[i+2]!=0||  
      this.dataDes.data[i+3]!=0)
      return 255;
   
   return 0;
}

// pg 492 criterior (a)
GonzalezThin.prototype.correctCount = function() {	// [out] meets 2<=N(p1)<=6 criterior	
   var total=0;
   for(var i=0; i<this.listNeighbors.length; i++) {
      if(this.listNeighbors[i]!=0) 
         total ++;
   }
   return(2<=total&&total<=6)?true:false;
}

// pg 492 criterior (b)
GonzalezThin.prototype.transition = function() {	// [out] meets S(p1)==1 criterior 0 to 1 transition
   var total=0;
   for(var i=0; i<this.listNeighbors.length-1; i++) {
      if(this.listNeighbors[i]==0)
         if(this.listNeighbors[i+1]!=0)
            total ++;
   }
   if(this.listNeighbors[this.listNeighbors.length-1]==0)
      if(this.listNeighbors[0]!=0)
         total ++;

   return (total==1)?true:false;
}

// pg 492 criterior (c, d) step 1
GonzalezThin.prototype.step1CD = function() {
   if(this.listNeighbors[this.P4]==0)
      return true;

   if(this.listNeighbors[this.P6]==0)
      return true;

   if(this.listNeighbors[this.P2]==0&&
      this.listNeighbors[this.P8]==0)
      return true;

	return false;
}
		
// pg 492 criterior (c, d) step 2
GonzalezThin.prototype.step2CD = function() {
   if(this.listNeighbors[this.P2]==0)
      return true;

   if(this.listNeighbors[this.P8]==0)
      return true;

   if(this.listNeighbors[this.P6]==0&&
      this.listNeighbors[this.P4]==0)
      return true;

   return false;
}



