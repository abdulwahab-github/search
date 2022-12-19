var a = {
    mobiles:{
        samsung:{
            samsung1:{
                name:'samsung1',
                ram:'4gb',
                rom:'64gb',
                camera:'50px',
                price:2000

            },
            note10:{
                name:'35',
                ram:'5gb',
                rom:'124gb',
                camera:'20px',
                price:10000
            },
            samsung15:{
                name:'samsung15',
                ram:'16gb',
                rom:'128gb',
                camera:'60px',
                price:40000
            },
        },
        iphone:{
        xs:{
            name:'450',
            ram:'15gb',
            rom:'164gb',
            camera:'60px',
            price:20000

        },
        i12:{
            name:'440',
            ram:'25gb',
            rom:'264gb',
            camera:'40px',
            price:60000

        },
        i13:{
            name:'480',
            ram:'28gb',
            rom:'284gb',
            camera:'70px',
            price:80000

        },
    },
    xiomi:{
        readme1:{
            name:'readme1.',
            ram:'18gb',
            rom:'164gb',
            camera:'880px',
            price:200

        },
        readme2:{
            name:'readme2.',
            ram:'144gb',
            rom:'1504gb',
            camera:'5580px',
            price:200000000

        },
        readme8:{
            name:'readme8.',
            ram:'180gb',
            rom:'1640gb',
            camera:'8811px',
            price:10

        },
        
    },

    },
}





function SearchHere(){
var Devices= document.getElementById('Devices');
var model= document.getElementById('model');

    console.log(a['mobiles'][Devices.value][model.value]);
 


    
}