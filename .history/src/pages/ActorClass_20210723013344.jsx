class Actor{

    constructor(firstName, lastName, birthday, image, imdbLink){

        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.image = image;
        this.imdbLink = imdbLink;
        this.age = age;

    }

    age(){
        var thisyear = new Date().getFullYear();
        var birthyear = this.birthday.getFullYear();
        return (thisyear - birthyear);
    }
}