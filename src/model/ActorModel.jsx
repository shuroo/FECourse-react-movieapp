class ActorModel{

    constructor(firstName, lastName, birthday, image, imdbLink){

        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.image = image;
        this.imdbLink = imdbLink;
        this.age = this.age.bind(this);
        this.key = this.firstName+"_"+this.lastName;
    }

    age(){
        var thisyear = (new Date()).getFullYear();
        var birthyear = new Date(this.birthday).getFullYear();
        return (thisyear - birthyear);
    }
}

export default ActorModel;