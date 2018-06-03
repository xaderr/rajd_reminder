const Discord = require('discord.js');
const bot = new Discord.Client();

const gea = '<@&436982514557386782>';
const ged = '<@&436982588121284618>';
var rajdList = new String();
var text = new String();
let modRole;
let j;
let k;
var n;


var rt3 = new Map();
rt3.set('Viconia','357574272945881089 ');
rt3.set('Kruchy','366626526009098241');
rt3.set('Polan','296622400198410241');
rt3.set('Lukasz','307554713212289024');
rt3.set('Tynka','430302560595869697');
rt3.set('Xader','222762799233761281 ');
rt3.set('Sztorm','176413302228910080');
rt3.set('Skalarek','351018405131976706');
var rt3_id = ['357574272945881089','366626526009098241','296622400198410241', '307554713212289024',
    '430302560595869697','222762799233761281','176413302228910080','351018405131976706'];

var ged_rt1= ['310834716620357634','181137845220540425','436965446042779668','382881899628199936','279331892262862848','436964477687169034','275268529517756417','243029161680175106'];
var ged_rt2= ['177325394792284160','442743140441522182','357268422264094721','440559571602505728','218165894629556224','355307403442520074','137560955444789249','360263741230678026'];
var ged_rt3= ['324861435433844737','352809425368514560','319614983384203264','436846489977880586','444200400887742474','359408600348885002','413418650402422786','436923901428105239'];
var gea_rt1 = ['359360563182305280','336892968780955649','344079803457994753','216678879501221890','353414596759126016','176346784908574730','242032042559143946','314867745789575168'];
const dniTygodnia = ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'];
// let content = new String();

bot.on('message', (message) =>{
    modRole = message.guild.roles.find("name","GEA Officer");
    rtRole = message.guild.roles.find("name","GEA rajd team 3");
    modRoleGED = message.guild.roles.find("name","GED Officer");
    var currentdate = new Date();
    if(message.member.roles.has(modRole.id)) {
       
        switch (message.content) {
           
            case 'u':
                currentdate= new Date();
                message.delete();
                message.channel.send(gea);
                if(currentdate.getMinutes()<10)
                    n = "0"+currentdate.getMinutes();
                else
                    n = currentdate.getMinutes();
                timeMax = (currentdate.getHours() + 16) % 24;
                var embed = new Discord.RichEmbed()
                    .setColor(0x0000FF)
                    .setThumbnail("https://vignette.wikia.nocookie.net/marvel-strike-force/images/1/1e/Ultimus.png/revision/latest?cb=20171226011555")
                    .setFooter('Rajd odpalony przez: ' + message.author.username)
                    .addField("Ultimus 50 lvl START", gea)
                    .addField("Data rozpoczęcia : ", dniTygodnia[currentdate.getDay()] + ', ' + currentdate.getDate() + '/' + (currentdate.getMonth() + 1) + ' o godzinie ' + currentdate.getHours() + ':' + n);
                if (currentdate.getHours() > 8)
                    text = "Jutro do godziny " + timeMax + ":" + n;
                else
                    text = "Dzisaj do godziny " + timeMax + ":" + n;
                embed.addField("Data zakończenia :", text);
                message.channel.send(embed);
                break;

            case 'd6':
                message.delete();
                currentdate= new Date();
                message.channel.send(gea);
                timeNext = (currentdate.getHours() + 16) % 24;
                var embed = new Discord.RichEmbed()
                    .setColor(0xFF0000)
                    .setThumbnail("http://msf.aegis.ro/wp-content/uploads/Deadpool.png")
                    .addField("Deadpool En Fuego START ", gea)
                    .addField("Data rozpoczęcia : ", dniTygodnia[currentdate.getDay()] + ', ' + currentdate.getDate() + '/' + (currentdate.getMonth() + 1) + ' o godzinie ' + currentdate.getHours() + ':' + currentdate.getMinutes())
                    .addField("Cel :", "**60%**")
                    .setFooter('Rajd odpalony przez: ' + message.author.username);
                if (currentdate.getDay() != 6) {
                    embed.addField("Kolejny rajd planowany na : ", dniTygodnia[(currentdate.getDay() + 1)] + ', ' + (currentdate.getDate() + 1) + '/' + (currentdate.getMonth() + 1) + ' około godziny ' + timeNext + ':' + currentdate.getMinutes())
                }
                ;
                message.channel.send(embed);
                break;

                case 'd':
                message.delete();
                currentdate= new Date();
                if(currentdate.getMinutes()<10)
                n = "0"+currentdate.getMinutes();
                else
                n = currentdate.getMinutes();
                message.channel.send(gea);
                timeNext = (currentdate.getHours() + 16) % 24;
                var embed = new Discord.RichEmbed()
                    .setColor(0xFF0000)
                    .setThumbnail("http://msf.aegis.ro/wp-content/uploads/Deadpool.png")
                    .addField("Deadpool En Fuego START ", gea)
                    .addField("Data rozpoczęcia : ", dniTygodnia[currentdate.getDay()] + ', ' + currentdate.getDate() + '/' + (currentdate.getMonth() + 1) + ' o godzinie ' + currentdate.getHours() + ':' + n)
                    .addField("Cel :", "**100%**")
                    .setFooter('Rajd odpalony przez: ' + message.author.username);
                message.channel.send(embed);
                break;



                case '!t1':
                message.delete();
                for (i = 0; i < rt3_id.length; i++) {
                rajdList += ('Linia '+(i+1)+' --- <@'+gea_rt1[i]+'> \n');
                }
                message.channel.send("Rotacja nr 1 z dnia " + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + '\n \n' + rajdList, {
                    file: 'https://cdn.discordapp.com/attachments/436984671230885900/439174133612281866/50-raid-map.png'
                });
                rajdList = "";
                break;

                case '!t2':
                message.delete();
                rajdList += ('Linia 1 --- <@'+gea_rt1[4]+'> \n');
                rajdList += ('Linia 2 --- <@'+gea_rt1[1]+'> \n');
                rajdList += ('Linia 3 --- <@'+gea_rt1[5]+'> \n');
                rajdList += ('Linia 4 --- <@'+gea_rt1[3]+'> \n');
                rajdList += ('Linia 5 --- <@'+gea_rt1[7]+'> \n');
                rajdList += ('Linia 6 --- <@'+gea_rt1[6]+'> \n');
                rajdList += ('Linia 7 --- <@'+gea_rt1[2]+'> \n');
                rajdList += ('Linia 8 --- <@'+gea_rt1[0]+'> \n');
                message.channel.send("Rotacja nr 2 z dnia " + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + '\n \n' + rajdList, {
                    file: 'https://cdn.discordapp.com/attachments/436984671230885900/439174133612281866/50-raid-map.png'
                });
                rajdList = "";
                break;

                case '!t3':
                message.delete();
                rajdList += ('Linia 1 --- <@'+gea_rt1[7]+'> \n');
                rajdList += ('Linia 2 --- <@'+gea_rt1[3]+'> \n');
                rajdList += ('Linia 3 --- <@'+gea_rt1[6]+'> \n');
                rajdList += ('Linia 4 --- <@'+gea_rt1[1]+'> \n');
                rajdList += ('Linia 5 --- <@'+gea_rt1[0]+'> \n');
                rajdList += ('Linia 6 --- <@'+gea_rt1[2]+'> \n');
                rajdList += ('Linia 7 --- <@'+gea_rt1[5]+'> \n');
                rajdList += ('Linia 8 --- <@'+gea_rt1[4]+'> \n');
                message.channel.send("Rotacja nr 3 z dnia " + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + '\n \n' + rajdList, {
                    file: 'https://cdn.discordapp.com/attachments/436984671230885900/439174133612281866/50-raid-map.png'
                });
                rajdList = "";
                break;

                case '!t4':
                message.delete();
                rajdList += ('Linia 1 --- <@'+gea_rt1[4]+'> \n');
                rajdList += ('Linia 2 --- <@'+gea_rt1[1]+'> \n');
                rajdList += ('Linia 3 --- <@'+gea_rt1[5]+'> \n');
                rajdList += ('Linia 4 --- <@'+gea_rt1[3]+'> \n');
                rajdList += ('Linia 5 --- <@'+gea_rt1[7]+'> \n');
                rajdList += ('Linia 6 --- <@'+gea_rt1[6]+'> \n');
                rajdList += ('Linia 7 --- <@'+gea_rt1[2]+'> \n');
                rajdList += ('Linia 8 --- <@'+gea_rt1[0]+'> \n');
                message.channel.send("Rotacja nr 4 z dnia " + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + '\n \n' + rajdList, {
                    file: 'https://cdn.discordapp.com/attachments/436984671230885900/439174133612281866/50-raid-map.png'
                });
                rajdList = "";
                break;

                case '!t5':
                message.delete();
                rajdList += ('Linia 1 --- <@'+gea_rt1[4]+'> \n');
                rajdList += ('Linia 2 --- <@'+gea_rt1[3]+'> \n');
                rajdList += ('Linia 3 --- <@'+gea_rt1[5]+'> \n');
                rajdList += ('Linia 4 --- <@'+gea_rt1[1]+'> \n');
                rajdList += ('Linia 5 --- <@'+gea_rt1[7]+'> \n');
                rajdList += ('Linia 6 --- <@'+gea_rt1[6]+'> \n');
                rajdList += ('Linia 7 --- <@'+gea_rt1[2]+'> \n');
                rajdList += ('Linia 8 --- <@'+gea_rt1[0]+'> \n');
                message.channel.send("Rotacja nr 5 z dnia " + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + '\n \n' + rajdList, {
                    file: 'https://cdn.discordapp.com/attachments/436984671230885900/439174133612281866/50-raid-map.png'
                });
                rajdList = "";
                break;
     
                case '!t6':
                message.delete();
                rajdList += ('Linia 1 --- <@'+gea_rt1[7]+'> \n');
                rajdList += ('Linia 2 --- <@'+gea_rt1[1]+'> \n');
                rajdList += ('Linia 3 --- <@'+gea_rt1[6]+'> \n');
                rajdList += ('Linia 4 --- <@'+gea_rt1[3]+'> \n');
                rajdList += ('Linia 5 --- <@'+gea_rt1[0]+'> \n');
                rajdList += ('Linia 6 --- <@'+gea_rt1[2]+'> \n');
                rajdList += ('Linia 7 --- <@'+gea_rt1[5]+'> \n');
                rajdList += ('Linia 8 --- <@'+gea_rt1[4]+'> \n');
                message.channel.send("Rotacja nr 6 z dnia " + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + '\n \n' + rajdList, {
                    file: 'https://cdn.discordapp.com/attachments/436984671230885900/439174133612281866/50-raid-map.png'
                });
                rajdList = "";
                break;
            };
            };

            if(message.member.roles.has(rtRole.id)) {
            switch (message.content) {  
            case '!1':
                message.delete();
                for (i = 0; i < rt3_id.length; i++) {
                    rajdList += ('Linia ' + (i + 1) + ' --- ' + '<@' + rt3_id[i] + '> \n');
                }
                message.channel.send("Rotacja nr 1 z dnia " + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + '\n \n' + rajdList, {
                    file: 'https://cdn.discordapp.com/attachments/436984671230885900/439174133612281866/50-raid-map.png'
                });
                rajdList = "";
                break;

            case '!2':
            message.delete();
                for(i =0; i< rt3_id.length; i++)
                {   
                    if(i-1<0)
                    rajdList+=('Linia '+ (i+1)+'---'+'<@' + rt3_id[rt3_id.length-1] + '> \n');
                    else
                    rajdList+= ('Linia '+ (i+1)+'---'+'<@' + rt3_id[i-1] + '> \n');
                    
                }
            message.channel.send("Rotacja nr 2 z dnia " + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + '\n \n' + rajdList, {
                file: 'https://cdn.discordapp.com/attachments/436984671230885900/439174133612281866/50-raid-map.png'
            });
            rajdList = "";
            break;  

    
            case '!3':
            j=0;
            k=2;
            message.delete();
                for(i =0; i< rt3_id.length; i++)
                {   
                    if(i-2<0){
                    rajdList+=('Linia '+ (i+1)+'---'+'<@' + rt3_id[rt3_id.length-k+j] + '> \n');
                        j++;
                }
                    else
                    rajdList+= ('Linia '+ (i+1)+'---'+'<@' + rt3_id[i-k] + '> \n');
                    
                }
            message.channel.send("Rotacja nr "+(k+1)+" z dnia " + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + '\n \n' + rajdList, {
                file: 'https://cdn.discordapp.com/attachments/436984671230885900/439174133612281866/50-raid-map.png'
            });
            rajdList = "";
            break;  

            case '!4':
            j=0;
            k=3;
            message.delete();
                for(i =0; i< rt3_id.length; i++)
                {   
                    if(i-k<0){
                    rajdList+=('Linia '+ (i+1)+'---'+'<@' + rt3_id[rt3_id.length-k+j] + '> \n');
                        j++;
                }
                    else
                    rajdList+= ('Linia '+ (i+1)+'---'+'<@' + rt3_id[i-k] + '> \n');
                    
                }
            message.channel.send("Rotacja nr "+(k+1)+" z dnia " + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + '\n \n' + rajdList, {
                file: 'https://cdn.discordapp.com/attachments/436984671230885900/439174133612281866/50-raid-map.png'
            });
            rajdList = "";
            break;

            case '!5':
            j=0;
            k=4;
            message.delete();
                for(i =0; i< rt3_id.length; i++)
                {   
                    if(i-k<0){
                    rajdList+=('Linia '+ (i+1)+'---'+'<@' + rt3_id[rt3_id.length-k+j] + '> \n');
                        j++;
                }
                    else
                    rajdList+= ('Linia '+ (i+1)+'---'+'<@' + rt3_id[i-k] + '> \n');
                    
                }
            message.channel.send("Rotacja nr "+(k+1)+" z dnia " + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + '\n \n' + rajdList, {
                file: 'https://cdn.discordapp.com/attachments/436984671230885900/439174133612281866/50-raid-map.png'
            });
            rajdList = "";
            break;  

            case '!6':
            j=0;
            k=5;
            message.delete();
                for(i =0; i< rt3_id.length; i++)
                {   
                    if(i-k<0){
                    rajdList+=('Linia '+ (i+1)+'---'+'<@' + rt3_id[rt3_id.length-k+j] + '> \n');
                        j++;
                }
                    else
                    rajdList+= ('Linia '+ (i+1)+'---'+'<@' + rt3_id[i-k] + '> \n');
                    
                }
            message.channel.send("Rotacja nr "+(k+1)+" z dnia " + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + '\n \n' + rajdList, {
                file: 'https://cdn.discordapp.com/attachments/436984671230885900/439174133612281866/50-raid-map.png'
            });
            rajdList = "";
            break;  

            case '!7':
            j=0;
            k=6;
            message.delete();
                for(i =0; i< rt3_id.length; i++)
                {   
                    if(i-k<0){
                    rajdList+=('Linia '+ (i+1)+'---'+'<@' + rt3_id[rt3_id.length-k+j] + '> \n');
                        j++;
                }
                    else
                    rajdList+= ('Linia '+ (i+1)+'---'+'<@' + rt3_id[i-k] + '> \n');
                    
                }
            message.channel.send("Rotacja nr "+(k+1)+" z dnia " + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + '\n \n' + rajdList, {
                file: 'https://cdn.discordapp.com/attachments/436984671230885900/439174133612281866/50-raid-map.png'
            });
            rajdList = "";
            break;  

            case '!8':
            j=0;
            k=7;
            message.delete();
                for(i =0; i< rt3_id.length; i++)
                {   
                    if(i-k<0){
                    rajdList+=('Linia '+ (i+1)+'---'+'<@' + rt3_id[rt3_id.length-k+j] + '> \n');
                        j++;
                }
                    else
                    rajdList+= ('Linia '+ (i+1)+'---'+'<@' + rt3_id[i-k] + '> \n');
                    
                }
            message.channel.send("Rotacja nr "+(k+1)+" z dnia " + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + '\n \n' + rajdList, {
                file: 'https://cdn.discordapp.com/attachments/436984671230885900/439174133612281866/50-raid-map.png'
            });
            rajdList = "";
            break;  
        }
    }

        if(message.member.roles.has(modRoleGED.id)) {

            switch (message.content) {

                case 'u':
                currentdate= new Date();
                message.delete();
                message.channel.send(ged);
                if(currentdate.getMinutes()<10)
                n = "0"+currentdate.getMinutes();
                else
                n = currentdate.getMinutes();
                currentdate.getHours();
                timeMax = (currentdate.getHours() + 16) % 24;
                var embed = new Discord.RichEmbed()
                    .setColor(0x0000FF)
                    .setThumbnail("https://vignette.wikia.nocookie.net/marvel-strike-force/images/1/1e/Ultimus.png/revision/latest?cb=20171226011555")
                    .setFooter('Rajd odpalony przez: ' + message.author.username)
                    .addField("Ultimus 50 lvl START", ged)
                    .addField("Data rozpoczęcia : ", dniTygodnia[currentdate.getDay()] + ', ' + currentdate.getDate() + '/' + (currentdate.getMonth() + 1) + ' o godzinie ' + currentdate.getHours() + ':' + n);
                if (currentdate.getHours() > 8)
                    text = "Jutro do godziny " + timeMax + ":" + n;
                else
                    text = "Dzisaj do godziny " + timeMax + ":" + n;
                embed.addField("Data zakończenia :", text);
                message.channel.send(embed);
                break;



                case 'd6':
            
                message.delete();
                currentdate= new Date();
                message.channel.send(ged);
                if(currentdate.getMinutes()<10)
                n = "0"+currentdate.getMinutes();
                else
                n = currentdate.getMinutes();
                timeNext = (currentdate.getHours() + 20) % 24;
                var embed = new Discord.RichEmbed()
                    .setColor(0xFF0000)
                    .setThumbnail("http://msf.aegis.ro/wp-content/uploads/Deadpool.png")
                    .addField("Deadpool En Fuego START ", ged)
                    .addField("Data rozpoczęcia : ", dniTygodnia[currentdate.getDay()] + ', ' + currentdate.getDate() + '/' + (currentdate.getMonth() + 1) + ' o godzinie ' + currentdate.getHours() + ':' + n)
                    .addField("Cel :", "**60%**")
                    .setFooter('Rajd odpalony przez: ' + message.author.username);
                // if (currentdate.getDay() == 6) {
                //     embed.addField("Kolejny rajd planowany na : ", dniTygodnia[(currentdate.getDay() + 1)] + ', ' + (currentdate.getDate() + 1) + '/' + (currentdate.getMonth() + 1) + ' około godziny ' + timeNext + ':' + currentdate.getMinutes())
                // }
                ;
                message.channel.send(embed);
                break;


                case 'ged u t1':
                message.delete();
                for(i =0;i<ged_rt1.length;i++){
                    rajdList+= ('Linia '+ (i+1)+'---'+'<@' + ged_rt1[i] + '> \n');
                }
                message.channel.send("Rajd team 1\n"+"Data rozpoczęcia: " + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + '\n \n' + rajdList, {
                    file: 'https://cdn.discordapp.com/attachments/436984671230885900/439174133612281866/50-raid-map.png'
                });
                rajdList = "";
                break;

                case 'ged u t2':
                message.delete();
                for(i =0;i<ged_rt2.length;i++){
                    rajdList+= ('Linia '+ (i+1)+'---'+'<@' + ged_rt2[i] + '> \n');
                }
                message.channel.send("Rajd team 2\n"+"Data rozpoczęcia: " + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + '\n \n' + rajdList, {
                    file: 'https://cdn.discordapp.com/attachments/436984671230885900/439174133612281866/50-raid-map.png'
                });
                rajdList = "";
                break;

                case 'ged u t3':
                message.delete();
                for(i =0;i<ged_rt3.length;i++){
                    rajdList+= ('Linia '+ (i+1)+'---'+'<@' + ged_rt3[i] + '> \n');
                }
                message.channel.send("Rajd team 3\n"+"Data rozpoczęcia: " + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + '\n \n' + rajdList, {
                    file: 'https://cdn.discordapp.com/attachments/436984671230885900/439174133612281866/50-raid-map.png'
                });
                rajdList = "";
                break;

            }

        }


        if((message.member.roles.has(modRole.id)) || (message.member.roles.has(modRoleGED.id)))  {
            switch (message.content) {  
            case 'h':
            message.channel.send("u - start Ultimusa na 16h 50 lvl \n d - start EN na 100% \n d3 - start EN na 30%  \nged u t1/2/3 - teamy GED\n!t1 - !t6 GEA RT 1\n !1 - !8 GEA rt3");
             break;
        }
    }
});

bot.login('NDQ5MjcyNjMyMDEwMDgwMjU3.DeiRbw.9bg3pDTt8MTQ4k_xaIAtNqGhJ-g');
