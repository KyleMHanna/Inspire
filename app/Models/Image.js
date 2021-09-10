export class Image {
constructor(data){
    this.id = data.id
    this.imgUrl = data.imgUrl
    this.largeImgUrl = data.largeImgUrl
    this.tags = data.tags
    this.author = data.author
    this.url = data.url
}

    get Template(){
        return /*html*/`

        `
    }
}