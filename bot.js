
//


const fs = require('fs')
const chalk = require('chalk')


//global apis
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
//global apikeys
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //api keys from zenzi
}


global.Api = new (require('./plugins/neoxrApi.js'))(process.env.API_KEY)

//settings

global.devlido = 'مطور ليدو'
global.owner = ['201028453763','201101389228'] //owner number ++447441437150
global.wame = ['201028453763',"201101389228"] 
global.pemilik = ['201028453763',"201101389228"] //owner number ++447441437150
global.premium = ['201028453763',"201101389228"] //premium number ++447441437150
global.footer = 'BAKAR BOT'
global.botnma = 'BAKAR BOT' //bot name
global.botname = 'BAKAR BOT'
global.botnamee = ' بكار'
global.ownernma = 'BAKAR BOT' //owner name
global.packname = 'BY DEV LIDO \n\n201028453763' //sticker package name

global.pack7xname = 'BAKAR BOT' //امر تلقائي 
global.author7X = 'BY DEV LIDO \n\n201028453763' //امر تلقائي 

global.author = 'DEV LIDO' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '🔵' //sp
global.max_upload = 100
global.dripstyping = true
global.dripsreadgroup = true
global.dripsreadall = true
global.dripsrecord = false
global.available = false
global.unavailable = false
global.limittot = 100,
global.thumb = fs.readFileSync('./Bakarbot/drips.jpg')
global.reactmoji = '🇿🇼'
global.imgjoinrpg = fs.readFileSync('./image/joinrpg.jpg')
global.imgmining = fs.readFileSync('./image/mining.jpg')
global.imgdevil = fs.readFileSync('./image/img/devil.jpg')
global.imgslime = fs.readFileSync('./image/img/slime.jpg')
global.imgdemon = fs.readFileSync('./image/img/demon.jpg')
global.imggoblin = fs.readFileSync('./image/img/goblin.jpg')
global.imgdemonking = fs.readFileSync('./image/img/demonking.jpg')
global.imgbehemoth = fs.readFileSync('./image/img/behemoth.jpg')
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
global.flaming = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mess = {
    success: '- تم بنجاح',
    admin: '*- هذا الاوامر لمطورين*',
    botAdmin: '*- ينجم ارفعني ادمن عشان اشتغل*',
    owner: '*الامر ده للمطور فقط*',
    group: '*هذا الاوامر في جروبات فقط*',
    groupgm: '*--*',
    grouponly: '*جروبات فقط*',
    private: '- الاوامر في خاص فقط تم',
    bot: '- الامر لمطور فقط',
    banned: '- تم حظرك من استخدام الاوامر',
    bangc: 'تم حظر هذا الجروب',
    wait: '*جاري تحميل .....*',
    endLimit: '*---*',
    noPetualang: '--_'
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100000 //free user limit
}
global.rpg = {
darahawal: 100,
besiawal: 15,
goldawal: 10,
emeraldawal: 5,
umpanawal: 5,
potionawal: 1
}
global.thumb = fs.readFileSync('./Bakarbot/drips.jpg')
global.visoka = { url: 'https://i.imgur.com/LbmTdhf.mp4' }
global.vid = { url: 'https://i.imgur.com/LbmTdhf.mp4' }

//—————「 Set Random Image Menu 」—————//

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.mehk = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
global.awog = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mohai = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mhehe = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
 
