var haHa = {
    name : 'haHa',
    birth : '1993',
    age : function () {
        var x = new Date().getFullYear();
        return x - this.birth;
    }
};

haHa.name();
haHa.age();
