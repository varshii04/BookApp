export class Note {
    public title: string;
    public text: string;
    public description:string;
    public previewlink:string;
    constructor(title:string, text:string, description:string,previewlink:string) {
        this.title = title;
        this.text = text;
        this.description=description;
        this.previewlink=previewlink;
    }
  }