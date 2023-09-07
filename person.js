const Person = (fullName = "unknown", age = 25, isMale = false, avatar = "") => {
    const info = () => {
        return `Nama: ${fullName}, Usia: ${age}, Jenis Kelamin: ${isMale ? 'Laki-laki' : 'Perempuan'}`;
    };
    
    return {
        get getInfo() {
            return info();
        },
        toString() {
            return info();
        },
        addAge: (years) => {
            age += years;
        },
        setAge: (newAge) => {
            age = newAge;
        },
        rename: (newName) => {
            fullName = newName;
        },
        get fullName() {
            return fullName;
        },
        get age() {
            return age;
        },
        get isMale() {
            return isMale;
        },
        get avatar() {
            return avatar;
        }
    };
};

export default Person;
