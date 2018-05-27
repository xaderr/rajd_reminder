const Discord = require('discord.js');
const bot = new Discord.Client();

var currentdate = new Date();
const gea = '<@&436982514557386782>';
var rajdList = new String();
var text = new String();

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
    switch(message.content){

        case 'u':
            message.delete();
            currentdate.getHours();
            timeMax = (currentdate.getHours() + 18) % 24;
            var embed = new Discord.RichEmbed()
                .setColor(0x0000FF)
                .setFooter('Rajd odpalony przez: '+ message.author.username)
                .addField("Ultimus 50 lvl START",gea)
                .addField("Data rozpoczęcia : ",dniTygodnia[currentdate.getDay()]+', '+currentdate.getDate()+'/'+(currentdate.getMonth()+1)+' o godzinie '+currentdate.getHours()+':'+currentdate.getMinutes());
            if(currentdate.getHours()>8)
                text="Jutro do godziny "+timeMax + ":"+currentdate.getMinutes();
            else
                text="Dzisaj do godziny "+timeMax + ":"+currentdate.getMinutes();
            embed.addField("Data zakończenia :",text);
            message.channel.send(embed);
            break;

        case 'd':

            message.delete();
            timeNext = (currentdate.getHours() + 20) % 24;
            var embed = new Discord.RichEmbed()
                .setColor(0xFF0000)
                .addField("Deadpool En Fuego START ",gea)
                .addField("Data rozpoczęcia : ",dniTygodnia[currentdate.getDay()]+', '+currentdate.getDate()+'/'+(currentdate.getMonth()+1)+' o godzinie '+currentdate.getHours()+':'+currentdate.getMinutes())
                .addField("Cel :","**60%**")
                .setFooter('Rajd odpalony przez: '+ message.author.username);
            if(currentdate.getDay() != 7){
                embed.addField("Kolejny rajd planowany na : ",dniTygodnia[(currentdate.getDay()+1)]+', '+(currentdate.getDate()+1)+'/'+(currentdate.getMonth()+1)+' około godziny '+timeNext+':'+currentdate.getMinutes())
            };
            message.channel.send(embed);
            break;



        case '1':
            message.delete();
            for (i = 0; i < rt3_id.length; i++) {
                rajdList+=('Linia '+(i+1)+' --- '+'<@'+rt3_id[i]+'> \n');
            }
            message.channel.send("Rotacja nr 1 z dnia "+currentdate.getDate()+"/"+(currentdate.getMonth()+1)+'\n \n'+rajdList,{
                file:'https://cdn.discordapp.com/attachments/436984671230885900/439174133612281866/50-raid-map.png'
            });
            rajdList="";
            break;

        // case '!2':
        //   message.delete();
        //   for (i = 0; i < rt3_id.length; i++) {
        //     //   if(i < 0)
        //     //     j = rt3_id.length - i;
        //     // else
        //     //     j = i;
        //       rajdList+=('Linia '+(i+1)+' --- '+'<@'+(rt3_id[(j-1)])+'> \n');
        //     }
        //     message.channel.send("Rotacja nr 2 z dnia "+currentdate.getDate()+"/"+(currentdate.getMonth()+1)+'\n \n'+rajdList,{
        //       file:'https://cdn.discordapp.com/attachments/436984671230885900/439174133612281866/50-raid-map.png'
        //     });

        //     break;
        //
        //     case '!3':
        //         message.delete();
        //         for (i = 0; i < rt3_id.length; i++) {
        //             message.channel.send('Linia '+(i+1)+' --- '+'<@'+rt3_id[.(i-2)]+'>');
        //         }
        //         break;
        //
        //     case '4':
        //
        //         break;
        //
        //     case '5':
        //
        //         break;
        //
        //     case '6':
        //
        //         break;
        //
        //     case '7':
        //
        //         break;
        //
        //     case '8':
        //
        //         break;
        //
        //     case '2':
        //
        //         break;



        case'!!xxx':
            channel.message.delete();
            break;
    }
});

bot.login('NDQ5MjcyNjMyMDEwMDgwMjU3.DeiRbw.9bg3pDTt8MTQ4k_xaIAtNqGhJ-g');