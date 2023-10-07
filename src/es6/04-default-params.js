function newUser(name, age, country) {
    var name = name || 'default';
    var age = age || 0;
    var country = country || 'default';
    console.log(name, age, country);
}

newUser();
newUser('Andrés', 27, 'CO');

function newAdmin (name = 'default', age = 0, country = 'default') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Andrés', 27, 'CO');
