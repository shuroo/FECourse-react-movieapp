class ActorModel{

    constructor(firstName, lastName, birthday, image, imdbLink){

        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.image = image;
        this.imdbLink = imdbLink;

    }

    age(){
        var thisyear = new Date().getFullYear();
        var birthyear = this.birthday.getFullYear();
        return (thisyear - birthyear);
    }
}

export default ActorModel;