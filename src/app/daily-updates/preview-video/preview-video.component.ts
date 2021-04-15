import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-preview-video',
  templateUrl: './preview-video.component.html',
  styleUrls: ['./preview-video.component.css']
})
export class PreviewVideoComponent implements OnInit {
  imageForm = new FormControl;

  // template drive form variables 
  url;
  format;

  constructor() { }

  ngOnInit(): void {
  }

    // images form 
    image_videosubmit(value){
      const formData = new FormData();
      formData.append("image_video", this.imageForm.get('image_video').value);
      console.log(formData);
      // this.commonService.sendImageAndVideoApi(formData).pipe(
      //   finalize(() => {
      //     this.loader = false;
      //   })
      // ).subscribe(res => {
      //   if(res.status){
      //     this.videoImages.push({file_type:value,product_type:'aircraft',file_name:res.data,user_id:localStorage.getItem('user_id'),})
      //     this.toastr.success(res.message)
      //   }
      // }, error => {
      //   const serverError = this.CommonServiceService.handleServerErrors(error)
      //   console.log(serverError)
      // })
    }
  
    onFileSelect(event) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        let condition_one = event.target.files[0].type == 'image/jpg' || event.target.files[0].type == 'image/jpeg'
        let videovalue = event.target.files[0].type.split('/');
        console.log(videovalue)
        let condition_three = event.target.files[0].size < 104857600
        if(condition_one){
          this.imageForm.get('image_video').setValue(file)
          const value = 'image'
          this.image_videosubmit(value);
        }else if (videovalue[0] == 'video'){
          if(condition_three){
          this.imageForm.get('image_video').setValue(file)
          const value = 'video'
          this.image_videosubmit(value);
          }else {
            alert("Maximum size will be 100 mb")
          }
        }else{
          alert("Please select images in JPG and videos")
        }
      }
    }

  
    onSelectFile(event) {
      const file = event.target.files && event.target.files[0];
      if (file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        if(file.type.indexOf('image')> -1){
          this.format = 'image';
        } else if(file.type.indexOf('video')> -1){
          this.format = 'video';
        }
        reader.onload = (event) => {
          this.url = (<FileReader>event.target).result;
        }
      }
    }

    fileList = [];
    fileProperties = {
      lastModifiedDate: "",
      name:"",
      size: 0,
      type: "",
      lastModified: ""
    }
    onSelectFile1(event) {
      console.log(event.target.files);
      // this.fileList = event.target.files;
      for(let j = 0; j < event.target.files.length; j++){
        this.fileList.push(event.target.files[j]);
      }


      // const file = event.target.files.length > 0;
      for(let i = 0; i < this.fileList.length; i++){
        var reader = new FileReader();
        reader.readAsDataURL(this.fileList[i]);
        if(this.fileList[i].type.indexOf('image')> -1){
          // this.format = 'image';
          this.fileList[i]['format'] = 'image';
        } else if(this.fileList[i].type.indexOf('video')> -1){
          // this.format = 'video';
          this.fileList[i]['format'] = 'video';
        }
        reader.onload = (event) => {
          // this.url = (<FileReader>event.target).result;
          this.fileList[i]['url'] = (<FileReader>event.target).result;
        }
        // ----------------------

      }

      console.log(this.fileList);
      // if(file){
     
      // } else {
      //   alert("Select a file");
      // }
      // if (file) {
      //   var reader = new FileReader();
      //   reader.readAsDataURL(file);
      //   if(file.type.indexOf('image')> -1){
      //     this.format = 'image';
      //   } else if(file.type.indexOf('video')> -1){
      //     this.format = 'video';
      //   }
      //   reader.onload = (event) => {
      //     this.url = (<FileReader>event.target).result;
      //   }
      // }
    }

}
