const _0x51658f=_0x221a;(function(_0x53d616,_0x4901e8){const _0x30cee1=_0x221a,_0x129c0c=_0x53d616();while(!![]){try{const _0x551549=-parseInt(_0x30cee1(0xd5))/0x1*(parseInt(_0x30cee1(0xca))/0x2)+-parseInt(_0x30cee1(0xb3))/0x3*(parseInt(_0x30cee1(0xb6))/0x4)+parseInt(_0x30cee1(0xc7))/0x5*(-parseInt(_0x30cee1(0xa7))/0x6)+-parseInt(_0x30cee1(0xdd))/0x7+parseInt(_0x30cee1(0xda))/0x8*(-parseInt(_0x30cee1(0xde))/0x9)+-parseInt(_0x30cee1(0xcd))/0xa*(-parseInt(_0x30cee1(0xc8))/0xb)+-parseInt(_0x30cee1(0xb8))/0xc*(-parseInt(_0x30cee1(0xbd))/0xd);if(_0x551549===_0x4901e8)break;else _0x129c0c['push'](_0x129c0c['shift']());}catch(_0x4dcfb5){_0x129c0c['push'](_0x129c0c['shift']());}}}(_0x5915,0x46c92));const more=document[_0x51658f(0xd2)](_0x51658f(0xce)),game=document[_0x51658f(0xd2)](_0x51658f(0xc6)),banner=document[_0x51658f(0xd2)](_0x51658f(0xc1)),url=_0x51658f(0xcf),secretKeyApi=_0x51658f(0xd3);let page=0x1;function _0x221a(_0x287372,_0x23b501){const _0x59152e=_0x5915();return _0x221a=function(_0x221aff,_0x43bfcf){_0x221aff=_0x221aff-0xa3;let _0x4b7455=_0x59152e[_0x221aff];return _0x4b7455;},_0x221a(_0x287372,_0x23b501);}function _0x5915(){const _0x54a9f9=['style','close','floor','165984DZPdLq','title','.field','https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=','#banner','input','display:\x20none;','innerText','\x27\x20\x27-\x27\x20\x27','#game','34330RFgxQG','88DCasJu','display','3160SpVtBd','application/json','querySelectorAll','408650XLdnEi','#more','https://image.tmdb.org/t/p/w500/','Movie\x20','split','querySelector','eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2Y4ODFjMjBkMTNhNTQ1ZWVlZGVkNjNhODIzNGU5YSIsInN1YiI6IjY1MzU0NTNmYzE0ZmVlMDBjNmVlMzk2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7xRogEg3YszQi2L6IPPjgzmmNQ2Vuk8oLiFMrJfdPMg','length','225lOFlVK','log','none','type','button','16rsXfjg','img','createElement','3933846WjZiFJ','1094661fDyHXw','option','innerHTML','json','add','198FUDDAY','addEventListener','click','Bearer\x20','classList','movie','backdrop_path','get','getAttribute','toUpperCase','text','src','327891ARRIXo','appendChild','div','16adqEPA','setAttribute','1680nxeDAA','width:\x2010px;\x20border:\x20none;\x20background:\x20transparent;'];_0x5915=function(){return _0x54a9f9;};return _0x5915();}const listLyric=[],nextPage=async()=>{page+=0x1,await whatMovie();},whatMovie=async()=>{const _0x401b23=_0x51658f,_0x21d6a1=await fetch(_0x401b23(0xc0)+page,{'method':_0x401b23(0xae),'headers':{'Content-Type':_0x401b23(0xcb),'Authorization':_0x401b23(0xaa)+secretKeyApi}}),{results:_0x11ffc0}=await _0x21d6a1[_0x401b23(0xa5)]();return await pageMain(_0x11ffc0),_0x11ffc0;},findProduct=async _0x447212=>{const _0x2c1188=_0x51658f,_0x2af930=Math[_0x2c1188(0xbc)](Math['random']()*_0x447212[_0x2c1188(0xd4)]);return _0x2af930;},pageMain=async _0x441659=>{_0x441659['map'](async _0x53beac=>{const _0xcbc350=_0x221a,_0x4017c1=document[_0xcbc350(0xdc)](_0xcbc350(0xb5));_0x4017c1['classList'][_0xcbc350(0xa6)](_0xcbc350(0xac));const _0x56b7f4=document[_0xcbc350(0xdc)]('img');_0x56b7f4[_0xcbc350(0xb2)]=''+(url+_0x53beac[_0xcbc350(0xad)]);const _0x55d1a0=document[_0xcbc350(0xdc)]('p');_0x55d1a0[_0xcbc350(0xc4)]=_0xcbc350(0xd0)+_0x53beac['title'],_0x4017c1[_0xcbc350(0xa8)](_0xcbc350(0xa9),async()=>{const _0xfc77fc=_0xcbc350;await pageGame(_0x53beac[_0xfc77fc(0xad)],_0x53beac[_0xfc77fc(0xbe)]);}),_0x4017c1['appendChild'](_0x56b7f4),_0x4017c1[_0xcbc350(0xb4)](_0x55d1a0),banner[_0xcbc350(0xb4)](_0x4017c1);});},pageGame=async(_0x352899,_0x14922d)=>{const _0x49d229=_0x51658f,_0x2a1ee2=document['createElement'](_0x49d229(0xdb));_0x2a1ee2[_0x49d229(0xb2)]=url+_0x352899;const _0x5978c5=document[_0x49d229(0xdc)]('div');_0x5978c5[_0x49d229(0xab)][_0x49d229(0xa6)](_0x49d229(0xa3));for(let _0x2191d1=0x0;_0x2191d1<_0x14922d[_0x49d229(0xd4)];_0x2191d1++){if(_0x14922d[_0x2191d1]==='\x20'){const _0x527e9d=document['createElement'](_0x49d229(0xb5));_0x527e9d[_0x49d229(0xb7)]('style',_0x49d229(0xb9)),_0x5978c5[_0x49d229(0xb4)](_0x527e9d);}else{if(_0x14922d[_0x2191d1]===':'||_0x14922d[_0x2191d1]==='!'||_0x14922d[_0x2191d1]===_0x49d229(0xc5)||_0x14922d[_0x2191d1]==='-'||_0x14922d[_0x2191d1]==='\x27'){const _0x348426=document[_0x49d229(0xdc)](_0x49d229(0xb5));_0x348426[_0x49d229(0xb7)](_0x49d229(0xba),_0x49d229(0xc3)),_0x5978c5[_0x49d229(0xb4)](_0x348426);}else{const _0x22bd84=document[_0x49d229(0xdc)](_0x49d229(0xb5));_0x22bd84[_0x49d229(0xab)][_0x49d229(0xa6)]('field'),_0x22bd84[_0x49d229(0xb7)]('id','A'+_0x14922d[_0x2191d1][_0x49d229(0xb0)]()+_0x2191d1),_0x5978c5[_0x49d229(0xb4)](_0x22bd84);}}}const _0x4eb554=document['createElement']('input');_0x4eb554[_0x49d229(0xb7)](_0x49d229(0xd8),_0x49d229(0xb1)),_0x4eb554[_0x49d229(0xa8)](_0x49d229(0xc2),({data:_0x46e77f})=>{const _0x8faac6=_0x49d229,_0x1224d0=document[_0x8faac6(0xcc)](_0x8faac6(0xbf));_0x1224d0['forEach'](_0x23d83b=>{const _0x106535=_0x8faac6,_0x10f2c0=_0x23d83b[_0x106535(0xaf)]('id')[_0x106535(0xd1)]('')[0x1];if(_0x10f2c0===_0x46e77f[_0x106535(0xb0)]()){const _0x51ed03=document[_0x106535(0xd2)]('#'+_0x23d83b[_0x106535(0xaf)]('id'));_0x51ed03[_0x106535(0xa4)]=_0x46e77f[_0x106535(0xb0)]();}});});const _0x5a10c4=document[_0x49d229(0xdc)](_0x49d229(0xd9));_0x5a10c4['setAttribute']('id',_0x49d229(0xbb)),_0x5a10c4[_0x49d229(0xc4)]='X',_0x5a10c4[_0x49d229(0xa8)](_0x49d229(0xa9),()=>{const _0x161b57=_0x49d229;game[_0x161b57(0xa4)]='',game[_0x161b57(0xba)][_0x161b57(0xc9)]=_0x161b57(0xd7);}),game['appendChild'](_0x2a1ee2),game['appendChild'](_0x5978c5),game[_0x49d229(0xb4)](_0x4eb554),game['appendChild'](_0x5a10c4),game['style']['display']='flex';},compareLyric=_0x146e28=>{const _0x4b7de4=_0x51658f;console[_0x4b7de4(0xd6)](_0x146e28);};more[_0x51658f(0xa8)](_0x51658f(0xa9),nextPage),whatMovie();