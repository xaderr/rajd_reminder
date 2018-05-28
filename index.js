const Discord = require('discord.js');
const bot = new Discord.Client();

var currentdate = new Date();
const gea = '<@&436982514557386782>';
const ged = '<@&436982588121284618>';
var rajdList = new String();
var text = new String();
let modRole;
let j;
let k;


var rt3 = new Map();
rt3.set('Viconia','357574272945881089 ');
rt3.set('Kruchy','366626526009098241');
rt3.set('Polan','296622400198410241');
rt3.set('Lukasz','307554713212289024');
rt3.set('Tynka','430302560595869697');
rt3.set('Xader','222762799233761281 ');
rt3.set('Kijek','432081260853198868');
rt3.set('Skalarek','351018405131976706');
var rt3_id = ['357574272945881089','366626526009098241','296622400198410241', '307554713212289024',
    '430302560595869697','222762799233761281','432081260853198868','351018405131976706'];

const dniTygodnia = ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'];


bot.on('message', (message) =>{
    modRole = message.guild.roles.find("name","GEA Officer");
    rtRole = message.guild.roles.find("name","GEA rajd team 3");
    modRoleGED = message.guild.roles.find("name","GED Officer");
    if(message.member.roles.has(modRole.id)) {
        switch (message.content) {
           
            case 'u':
                
                message.delete();
                message.channel.send(gea);
                currentdate.getHours();
                timeMax = (currentdate.getHours() + 18) % 24;
                var embed = new Discord.RichEmbed()
                    .setColor(0x0000FF)
                    .setThumbnail("https://vignette.wikia.nocookie.net/marvel-strike-force/images/1/1e/Ultimus.png/revision/latest?cb=20171226011555")
                    .setFooter('Rajd odpalony przez: ' + message.author.username)
                    .addField("Ultimus 50 lvl START", gea)
                    .addField("Data rozpoczęcia : ", dniTygodnia[currentdate.getDay()] + ', ' + currentdate.getDate() + '/' + (currentdate.getMonth() + 1) + ' o godzinie ' + currentdate.getHours() + ':' + currentdate.getMinutes());
                if (currentdate.getHours() > 8)
                    text = "Jutro do godziny " + timeMax + ":" + currentdate.getMinutes();
                else
                    text = "Dzisaj do godziny " + timeMax + ":" + currentdate.getMinutes();
                embed.addField("Data zakończenia :", text);
                message.channel.send(embed);
                break;

            case 'd6':
            
                message.delete();
                message.channel.send(gea);
                timeNext = (currentdate.getHours() + 20) % 24;
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
                message.channel.send(gea);
                timeNext = (currentdate.getHours() + 20) % 24;
                var embed = new Discord.RichEmbed()
                    .setColor(0xFF0000)
                    .setThumbnail("http://msf.aegis.ro/wp-content/uploads/Deadpool.png")
                    .addField("Deadpool En Fuego START ", gea)
                    .addField("Data rozpoczęcia : ", dniTygodnia[currentdate.getDay()] + ', ' + currentdate.getDate() + '/' + (currentdate.getMonth() + 1) + ' o godzinie ' + currentdate.getHours() + ':' + currentdate.getMinutes())
                    .addField("Cel :", "**100%**")
                    .setFooter('Rajd odpalony przez: ' + message.author.username);
                message.channel.send(embed);
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
                message.delete();
                message.channel.send(ged);
                currentdate.getHours();
                timeMax = (currentdate.getHours() + 18) % 24;
                var embed = new Discord.RichEmbed()
                    .setColor(0x0000FF)
                    .setThumbnail("https://vignette.wikia.nocookie.net/marvel-strike-force/images/1/1e/Ultimus.png/revision/latest?cb=20171226011555")
                    .setFooter('Rajd odpalony przez: ' + message.author.username)
                    .addField("Ultimus 50 lvl START", ged)
                    .addField("Data rozpoczęcia : ", dniTygodnia[currentdate.getDay()] + ', ' + currentdate.getDate() + '/' + (currentdate.getMonth() + 1) + ' o godzinie ' + currentdate.getHours() + ':' + currentdate.getMinutes());
                if (currentdate.getHours() > 8)
                    text = "Jutro do godziny " + timeMax + ":" + currentdate.getMinutes();
                else
                    text = "Dzisaj do godziny " + timeMax + ":" + currentdate.getMinutes();
                embed.addField("Data zakończenia :", text);
                message.channel.send(embed);
                break;



                case 'd6':
            
                message.delete();
                message.channel.send(ged);
                timeNext = (currentdate.getHours() + 20) % 24;
                var embed = new Discord.RichEmbed()
                    .setColor(0xFF0000)
                    .setThumbnail("http://msf.aegis.ro/wp-content/uploads/Deadpool.png")
                    .addField("Deadpool En Fuego START ", ged)
                    .addField("Data rozpoczęcia : ", dniTygodnia[currentdate.getDay()] + ', ' + currentdate.getDate() + '/' + (currentdate.getMonth() + 1) + ' o godzinie ' + currentdate.getHours() + ':' + currentdate.getMinutes())
                    .addField("Cel :", "**60%**")
                    .setFooter('Rajd odpalony przez: ' + message.author.username);
                if (currentdate.getDay() != 6) {
                    embed.addField("Kolejny rajd planowany na : ", dniTygodnia[(currentdate.getDay() + 1)] + ', ' + (currentdate.getDate() + 1) + '/' + (currentdate.getMonth() + 1) + ' około godziny ' + timeNext + ':' + currentdate.getMinutes())
                }
                ;
                message.channel.send(embed);
                break;


                case 'i':

                message.member.roles.
                break;

            }

        }


        if((message.member.roles.has(modRole.id)) || (message.member.roles.has(modRoleGED.id)))  {
            switch (message.content) {  
            case 'h':
            message.channel.send("u - start Ultimusa na 16h 50 lvl \n d - start EN na 100% \n d6 - start EN na 60% + podana data przyszłego rajdu");
             break;
        }
    }
});

bot.login('NDQ5MjcyNjMyMDEwMDgwMjU3.DeiRbw.9bg3pDTt8MTQ4k_xaIAtNqGhJ-g');
