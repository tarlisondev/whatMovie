const _0x43b34f=_0x188a;(function(_0x3a04eb,_0x5090cb){const _0x37b29e=_0x188a,_0x2eca4d=_0x3a04eb();while(!![]){try{const _0x520fcc=parseInt(_0x37b29e(0xd9))/0x1*(parseInt(_0x37b29e(0x10f))/0x2)+parseInt(_0x37b29e(0x10a))/0x3*(-parseInt(_0x37b29e(0xeb))/0x4)+-parseInt(_0x37b29e(0xfa))/0x5*(parseInt(_0x37b29e(0xdc))/0x6)+-parseInt(_0x37b29e(0xd1))/0x7+-parseInt(_0x37b29e(0xe5))/0x8+parseInt(_0x37b29e(0xe6))/0x9*(parseInt(_0x37b29e(0xff))/0xa)+parseInt(_0x37b29e(0x107))/0xb*(parseInt(_0x37b29e(0xd5))/0xc);if(_0x520fcc===_0x5090cb)break;else _0x2eca4d['push'](_0x2eca4d['shift']());}catch(_0x5607d7){_0x2eca4d['push'](_0x2eca4d['shift']());}}}(_0x5f45,0x9efc0));const banner=document['querySelector']('#banner'),game=document[_0x43b34f(0xfc)]('#game'),more=document['querySelector']('#more');let page=0x1,numberLyricMovie=0x0,skipCount=0x0;function _0x188a(_0x7a8c99,_0x3e097d){const _0x5f45d0=_0x5f45();return _0x188a=function(_0x188a3e,_0x542e9b){_0x188a3e=_0x188a3e-0xcf;let _0x3161c1=_0x5f45d0[_0x188a3e];return _0x3161c1;},_0x188a(_0x7a8c99,_0x3e097d);}function _0x5f45(){const _0x1e0d7e=['pointer','lyric','2392008OYLjue','red','movie','display:\x20none;','fixed','toUpperCase','results','6672260JVfRnS','appendChild','\x20h4','createElement','12156fVEWNE','value','text','disabled','1zRyOZL','setAttribute','true','6CjgpRp','classList','Ganhou!!!','https://image.tmdb.org/t/p/w500/','add','border:\x202px\x20solid\x20green;','addEventListener','.congratulation','split','6743232FLYuIr','126fulhxf','map','src','.congratulation\x20p','display:\x20flex;','44esOijc','type','click','top','div','keyup','display:\x20none;\x20','\x20img','color','fontSize','\x20border:\x20none;\x20width:\x206px;\x20background:\x20transparent;','display:\x20flex;\x20','Bearer\x20eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2Y4ODFjMjBkMTNhNTQ1ZWVlZGVkNjNhODIzNGU5YSIsInN1YiI6IjY1MzU0NTNmYzE0ZmVlMDBjNmVlMzk2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7xRogEg3YszQi2L6IPPjgzmmNQ2Vuk8oLiFMrJfdPMg','img','backdrop_path','2986265VrsjSM','https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=','querySelector','style','innerHTML','749380vMrQaO','innerText','fieldLyric','position','title','cursor','log','Filme','8690duBcRS','textContent','conta\x20','237moDIMp','json','getAttribute'];_0x5f45=function(){return _0x1e0d7e;};return _0x5f45();}const lyricList=[];more[_0x43b34f(0xe2)](_0x43b34f(0xed),async()=>{page+=0x1,await movie();});async function movie(){const _0x1258d3=_0x43b34f,_0x263de7=await fetch(_0x1258d3(0xfb)+page,{'method':'get','headers':{'Content-Type':'application/json','Authorization':_0x1258d3(0xf7)}}),_0x1b71ca=await _0x263de7[_0x1258d3(0x10b)]();_0x1b71ca[_0x1258d3(0xd0)][_0x1258d3(0xe7)](_0x5aedae=>{const _0x27b48f=_0x1258d3,_0x12188b=document['createElement'](_0x27b48f(0xef));_0x12188b[_0x27b48f(0xdd)][_0x27b48f(0xe0)](_0x27b48f(0x111)),_0x12188b[_0x27b48f(0xda)]('id',_0x27b48f(0xf8)+_0x5aedae['id']);const _0xe6764f=document[_0x27b48f(0xd4)](_0x27b48f(0xf8));_0xe6764f[_0x27b48f(0xe8)]=_0x27b48f(0xdf)+_0x5aedae[_0x27b48f(0xf9)];const _0x5039f5=document[_0x27b48f(0xd4)]('h4');_0x5039f5[_0x27b48f(0x100)]=_0x27b48f(0x106),_0x12188b['addEventListener']('click',()=>{const _0x1f59d6=_0x27b48f,_0x416a6e=_0x12188b[_0x1f59d6(0x10c)]('id'),_0x2cc2c2=document[_0x1f59d6(0xfc)]('#'+_0x416a6e+_0x1f59d6(0xf2))['src'],_0x27e5b2=document[_0x1f59d6(0xd4)](_0x1f59d6(0xef));_0x27e5b2['innerText']='X',_0x27e5b2[_0x1f59d6(0xfd)][_0x1f59d6(0x102)]=_0x1f59d6(0x113),_0x27e5b2['style'][_0x1f59d6(0xee)]='5%',_0x27e5b2['style']['right']='5%',_0x27e5b2[_0x1f59d6(0xfd)][_0x1f59d6(0xf3)]=_0x1f59d6(0x110),_0x27e5b2[_0x1f59d6(0xfd)][_0x1f59d6(0x104)]=_0x1f59d6(0x10d),_0x27e5b2['style'][_0x1f59d6(0xf4)]='20px',_0x27e5b2[_0x1f59d6(0xe2)](_0x1f59d6(0xed),()=>{const _0x5e216d=_0x1f59d6;game['innerHTML']='',game[_0x5e216d(0xda)]('style',_0x5e216d(0xf1));});const _0x428ad2=document[_0x1f59d6(0xd4)](_0x1f59d6(0xf8));_0x428ad2['src']=_0x2cc2c2;const _0x2a7129=document[_0x1f59d6(0xd4)](_0x1f59d6(0xef));_0x2a7129[_0x1f59d6(0xdd)]['add']('option');const _0x51a8de=document[_0x1f59d6(0xd4)]('input');_0x51a8de['setAttribute'](_0x1f59d6(0xec),_0x1f59d6(0xd7)),_0x51a8de[_0x1f59d6(0xda)]('id',_0x1f59d6(0x101)),_0x51a8de[_0x1f59d6(0xda)]('placeholder','Digite\x20uma\x20letra');for(let _0x3a4029=0x0;_0x3a4029<_0x5aedae[_0x1f59d6(0x103)]['length'];_0x3a4029++){const _0x55009f=document[_0x1f59d6(0xd4)]('div');_0x55009f[_0x1f59d6(0xdd)][_0x1f59d6(0xe0)](_0x1f59d6(0x10e));if(_0x5aedae[_0x1f59d6(0x103)][_0x3a4029]==='\x20')_0x55009f['setAttribute'](_0x1f59d6(0xfd),_0x1f59d6(0xf5));else _0x5aedae[_0x1f59d6(0x103)][_0x3a4029]===':'||_0x5aedae['title'][_0x3a4029]==='!'?_0x55009f[_0x1f59d6(0xda)](_0x1f59d6(0xfd),'display:\x20none;'):(numberLyricMovie+=0x1,_0x55009f[_0x1f59d6(0xda)]('id',_0x5aedae[_0x1f59d6(0x103)][_0x3a4029][_0x1f59d6(0xcf)]()+_0x3a4029));_0x51a8de[_0x1f59d6(0xe2)](_0x1f59d6(0xf0),_0x464569=>{const _0x352705=_0x1f59d6,_0x5dd7ed=_0x55009f[_0x352705(0x10c)]('id'),_0x2229ac=_0x51a8de[_0x352705(0xd6)][_0x352705(0xcf)]()+_0x3a4029,_0x456d75=document[_0x352705(0xfc)]('#'+_0x5dd7ed),_0x1920d8=lyricList['find'](_0xd5a2e5=>_0xd5a2e5==_0x5dd7ed[_0x352705(0xe4)]('')[0x0]);console[_0x352705(0x105)](_0x1920d8),console[_0x352705(0x105)](lyricList);_0x2229ac===_0x5dd7ed&&_0x1920d8!==_0x2229ac[_0x352705(0xe4)]('')[0x0]&&(skipCount+=0x1,_0x55009f[_0x352705(0x100)]=_0x51a8de[_0x352705(0xd6)],_0x55009f['setAttribute'](_0x352705(0xfd),_0x352705(0xe1)),_0x55009f[_0x352705(0xda)](_0x352705(0xd8),_0x352705(0xdb)),console[_0x352705(0x105)](_0x352705(0x109)+skipCount),lyricList['push'](_0x456d75[_0x352705(0x108)][_0x352705(0xcf)]()));if(skipCount===numberLyricMovie)return document[_0x352705(0xfc)]('#'+_0x416a6e+_0x352705(0xd3))[_0x352705(0xfe)]=_0x5aedae[_0x352705(0x103)]['toUpperCase'](),document[_0x352705(0xfc)](_0x352705(0xe3))[_0x352705(0xda)]('style',_0x352705(0xea)),document[_0x352705(0xfc)](_0x352705(0xe9))[_0x352705(0xe2)](_0x352705(0xed),()=>{const _0x351f9e=_0x352705;document[_0x351f9e(0xfc)](_0x351f9e(0xe3))[_0x351f9e(0xda)]('style',_0x351f9e(0x112));}),console[_0x352705(0x105)](_0x352705(0xde));}),_0x51a8de['addEventListener'](_0x1f59d6(0xf0),_0x28d0f5=>{const _0x1e78c0=_0x1f59d6;_0x28d0f5['keyCode']===0x8&&_0x51a8de['setAttribute'](_0x1e78c0(0xfd),'border:\x20none;\x20outline:\x20none;');}),_0x2a7129[_0x1f59d6(0xd2)](_0x55009f);}game[_0x1f59d6(0xd2)](_0x27e5b2),game[_0x1f59d6(0xd2)](_0x428ad2),game[_0x1f59d6(0xd2)](_0x2a7129),game[_0x1f59d6(0xd2)](_0x51a8de),game[_0x1f59d6(0xda)]('style',_0x1f59d6(0xf6));}),_0x12188b['appendChild'](_0xe6764f),_0x12188b[_0x27b48f(0xd2)](_0x5039f5),banner['appendChild'](_0x12188b);});}movie();