import './style.css';

/* ═══════ PORTFOLIO DATA ═══════ */
const PORTFOLIO={owner:{name:"Luis Alberto Cadete Rosario",title:"AI Engineer",school:"PXL Hogeschool",year:"3e jaar Toegepaste Informatica — AI",origin:"Dom. Rep. → Spanje → België",sports:["Honkbal — Precisie & Teamwork","Brazilian Jiu-Jitsu — Discipline"],superpower:"Kalmte onder druk"},
personalityStats:[{label:"KALMTE ONDER DRUK",pct:92,color:"#00ffe7"},{label:"ANALYTISCH DENKEN",pct:93,color:"#0088ff"},{label:"TEAMWORK",pct:90,color:"#0011ff"},{label:"COMMUNICATIE",pct:88,color:"#ffaa00"},{label:"CREATIVITEIT",pct:89,color:"#00ff80"}],
skills:[{name:"Python",icon:"🐍"},{name:"Machine Learning",icon:"🧠"},{name:"Neural Networks",icon:"🔗"},{name:"SQL/Databases",icon:"🗄️"},{name:"Linux/Bash",icon:"🐧"},{name:"SAP BTP",icon:"☁️"},{name:"Prompt Engineering",icon:"✍️"},{name:"Git/VCS",icon:"🔀"},{name:"API Development",icon:"🔌"},{name:"Docker/K8s",icon:"🐳"},{name:"NiFi/Kafka",icon:"📊"},{name:"Spark/MLflow",icon:"⚡"},{name:"ROS/Gazebo",icon:"🤖"},{name:"Spring Boot",icon:"🍃"},{name:"TensorFlow/PyTorch",icon:"🧮"},{name:"OpenCV/MediaPipe",icon:"👁️"}],
softSkills:["Kalmte onder druk","Analytisch denken","Flexibiliteit","Nieuwsgierigheid","Doorzettingsvermogen","Teamwerk","Communicatie","Probleemoplossend denken","Snelle leerling","Adaptiviteit","Kritisch evalueren"],
seminars:[{date:"14.10.2025",title:"AI & De Toekomst van IT",org:"Jackie Janssen",loc:"PXL-Next",dur:"3u",desc:"Nieuwste AI-ontwikkelingen en impact op de IT-professional."},{date:"05.11.2025",title:"Quantum Machine Learning",org:"IBM",loc:"Corda 7",dur:"3u",desc:"Introductie in quantum-centric supercomputing, qubits en error mitigation."},{date:"24.11.2025",title:"Een Bedrijf in Bijberoep",org:"Sarah Swaenepoel",loc:"PXL-Next",dur:"2u",desc:"Administratieve en strategische stappen voor het opstarten van een eigen zaak."},{date:"17.12.2025",title:"Digital Forensics",org:"Politie",loc:"Corda 7",dur:"4u",desc:"Digitaal sporenonderzoek en data-analyse met Autopsy."},{date:"04.03.2025",title:"Low Code / No Code",org:"Flexso",loc:"Corda 7",dur:"3u",desc:"Bedrijfsprocessen optimaliseren via visuele ontwikkelomgevingen."},{date:"11.03.2025",title:"LLMs & Diffusiemodellen",org:"Uncanny",loc:"Corda 7",dur:"3u",desc:"Kritische analyse van generatieve AI-tools, bias in algoritmes."},{date:"25.03.2025",title:"Pull Requests & Code Review",org:"BIQ",loc:"Corda 7",dur:"3u",desc:"Gestructureerde code-evaluaties voor softwarekwaliteit."},{date:"22.04.2025",title:"Postman & AI-Testing",org:"Refleqt",loc:"Corda 7",dur:"2u",desc:"API-tests in Postman automatiseren met AI-gestuurde tools."}],
zones:[
{id:"UNIT_PROFILE",tile:[12,34],accent:"#00ffe7",template:"profile",title:"CADETE_ROSARIO",order:1},
{id:"TECH_SKILLS",tile:[16,28],accent:"#0088ff",template:"skills",title:"TECHNICAL_CORE",order:2},
{id:"KNOWLEDGE_LOG",tile:[26,32],accent:"#ffaa00",template:"seminaries",title:"SEMINARIES",order:3},
{id:"DEEP_DIVE",tile:[32,22],accent:"#ff2d78",template:"hackathon",title:"HACK_THE_FUTURE",order:4},
{id:"INT_MISSION",tile:[24,14],accent:"#ffaa00",template:"hannover",title:"GERMANY_TRIP",order:5},
{id:"AI_INNOVATION",tile:[34,10],accent:"#0088ff",template:"sap",title:"SAP_LAB",order:6},
{id:"PROJECT_VAULT",tile:[12,10],accent:"#00ffe7",template:"projects",title:"SCHOOL_PROJECTS",order:7},
{id:"REFLECTION_CORE",tile:[18,18],accent:"#ff2d78",template:"reflection",title:"EINDREFLECTIE",order:8},
{id:"CONNECT_HUB",tile:[6,22],accent:"#00ffe7",template:"connect",title:"CONTACT",order:9}
]};

/* ═══════ CONFIG ═══════ */
const CFG={TILE_W:64,TILE_H:32,TILE_HALF_W:32,TILE_HALF_H:16,GRID:40,CENTER:20,ROBOT_SPEED:2.5,ZOOM_MIN:.7,ZOOM_MAX:2,ZOOM_DEFAULT:1,ZOOM_BUILDING:1.6,ZOOM_WELCOME:2.5};
const CANVAS=document.getElementById('gameCanvas'),ctx=CANVAS.getContext('2d'),CTX=ctx;
const MINI_CANVAS=document.getElementById('minimapCanvas'),MINI_CTX=MINI_CANVAS.getContext('2d');
const WELCOME_CANVAS=document.getElementById('welcome-robot-canvas'),WELCOME_CTX=WELCOME_CANVAS.getContext('2d');
const CHAT_CANVAS=document.getElementById('chat-robot-canvas'),CHAT_CTX=CHAT_CANVAS.getContext('2d');
let W,H,offsetX,offsetY;
let cam={x:0,y:0,zoom:1,targetX:0,targetY:0,targetZoom:1};
let robot={tileX:6,tileY:34,screenX:0,screenY:0,moving:false,path:[],animFrame:0,blinkTimer:2000,isScanning:false,scanTimer:0,attentionPose:false};
let dragging=false,draggingCam={x:0,y:0};
let visitedZones=new Set(),currentZoneIdx=-1;
let bootComplete=false,bootAborted=false;
let buildings=[],walkableGrid=[],rainDrops=[],signalWaves=[],footprints=[],chatMode=false;
let hoveredBuilding=null,welcomeAnimRunning=false,chatAnimRunning=false;
let chats=[],chatState='idle',ttsEnabled=true;
let cityDecoration=[],traffic=[];

/* ═══════ CITY DECORATION & TRAFFIC ═══════ */
function initCityDecoration(){
  cityDecoration=[];
}
function initTraffic(){
  traffic=[];
  for(let i=0;i<20;i++){
    traffic.push({x:Math.random()*CFG.GRID,y:Math.random()*CFG.GRID,dir:Math.random()>.5?'x':'y',speed:.05+Math.random()*.1,color:Math.random()>.5?'#00ffe7':'#ff2d78'});
  }
}
function updateTraffic(dt){
  traffic.forEach(t=>{
    if(t.dir==='x')t.x+=t.speed;else t.y+=t.speed;
    if(t.x>=CFG.GRID)t.x=0;if(t.y>=CFG.GRID)t.y=0;
  });
}
function drawTraffic(){
  traffic.forEach(t=>{
    const p=tileToScreen(t.x,t.y);
    ctx.fillStyle=t.color;ctx.shadowColor=t.color;ctx.shadowBlur=8*cam.zoom;
    ctx.fillRect(p.x-2*cam.zoom,p.y-2*cam.zoom,4*cam.zoom,2*cam.zoom);
    ctx.shadowBlur=0;
  });
}

// Ollama config (Verbetering 2)
const OLLAMA_ENDPOINT=import.meta.env.VITE_OLLAMA_ENDPOINT||'http://localhost:11434/api/chat';
const OLLAMA_MODEL=import.meta.env.VITE_OLLAMA_MODEL||'llama3';
const OLLAMA_API_KEY=import.meta.env.VITE_OLLAMA_API_KEY||'';

/* ═══════ PATH WAYPOINTS (v4.0) ═══════ */
const PATH_WAYPOINTS=[[8,34],[9,33],[10,32],[11,31],[16,28],[17,27],[18,26],[19,25],[20,24],[26,32],[27,31],[28,30],[29,29],[30,28],[31,27],[32,22],[31,21],[30,20],[29,19],[28,18],[24,14],[25,13],[26,12],[34,10],[33,11],[32,12],[31,13],[12,10],[13,11],[14,12],[18,18],[17,19],[16,20],[15,21],[14,22],[13,23],[12,24],[11,23],[10,22],[9,22],[8,22],[7,22],[6,22]];

function isOnPlatform(tx,ty){const dx=Math.abs(tx-CFG.CENTER),dy=Math.abs(ty-CFG.CENTER);return dx+dy<=28&&dx<=18&&dy<=18}
function tileToScreen(tx,ty){return{x:(tx-ty)*CFG.TILE_HALF_W*cam.zoom+offsetX+cam.x,y:(tx+ty)*CFG.TILE_HALF_H*cam.zoom+offsetY+cam.y}}
function screenToTile(sx,sy){const dx=sx-offsetX-cam.x,dy=sy-offsetY-cam.y;return{tx:(dx/(CFG.TILE_HALF_W*cam.zoom)+dy/(CFG.TILE_HALF_H*cam.zoom))/2,ty:(dy/(CFG.TILE_HALF_H*cam.zoom)-dx/(CFG.TILE_HALF_W*cam.zoom))/2}}
function getTileFromScreen(mx,my){const adjX=(mx-W/2)/cam.zoom+cam.x,adjY=(my-H/2)/cam.zoom+cam.y;return{x:Math.floor((adjX/(CFG.TILE_W/2)+adjY/(CFG.TILE_H/2))/2),y:Math.floor((adjY/(CFG.TILE_H/2)-adjX/(CFG.TILE_W/2))/2)}}
function updateCamCenter(){const r=tileToScreen(robot.tileX,robot.tileY);cam.targetX=W/2-r.x;cam.targetY=H/2-r.y}
function darken(h,f){const r=parseInt(h.slice(1,3),16),g=parseInt(h.slice(3,5),16),b=parseInt(h.slice(5,7),16),o=1-f;return`rgb(${r*o|0},${g*o|0},${b*o|0})`}

/* ═══════ BUILDING DEFS (v4.0 — verspreid op 40×40) ═══════ */
const BUILDING_DEFS=[
{id:"UNIT_PROFILE",tx:12,ty:34,w:3.5,h:2.5,color:"#00ffe7",type:"house"},
{id:"TECH_SKILLS",tx:16,ty:28,w:4.5,h:2,color:"#0088ff",type:"house"},
{id:"KNOWLEDGE_LOG",tx:26,ty:32,w:2.5,h:3,color:"#ffaa00",type:"tower"},
{id:"DEEP_DIVE",tx:32,ty:22,w:4,h:1.8,color:"#ff2d78",type:"house"},
{id:"INT_MISSION",tx:24,ty:14,w:5,h:2.5,color:"#ffaa00",type:"house"},
{id:"AI_INNOVATION",tx:34,ty:10,w:4,h:2.5,color:"#0088ff",type:"tower"},
{id:"PROJECT_VAULT",tx:12,ty:10,w:4.5,h:3,color:"#00ffe7",type:"house"},
{id:"REFLECTION_CORE",tx:18,ty:18,w:3.5,h:2.2,color:"#ff2d78",type:"house"},
{id:"CONNECT_HUB",tx:6,ty:22,w:3,h:2,color:"#00ffe7",type:"house"}
];

function createBuildings(){buildings=BUILDING_DEFS.map((d,i)=>{const z=PORTFOLIO.zones[i];return{...d,zone:z,entranceTileX:d.tx+Math.floor(d.w/2),entranceTileY:d.ty+Math.ceil(d.h),hovered:false,flickerPhase:Math.random()*Math.PI*2}})}

/* ═══════ 4-WAY A* (Verbetering 3) ═══════ */
function aStar(sx,sy,ex,ey){
  const K=(x,y)=>x+','+y,cols=CFG.GRID,rows=CFG.GRID;
  let closed=new Set(),open=[{x:sx,y:sy,g:0,f:Math.abs(sx-ex)+Math.abs(sy-ey),parent:null}];
  while(open.length){
    open.sort((a,b)=>a.f-b.f);let c=open.shift();
    if(c.x===ex&&c.y===ey){let p=[],n=c;while(n){p.unshift({x:n.x,y:n.y});n=n.parent}return p}
    closed.add(K(c.x,c.y));
    for(let[dxx,dyy]of[[0,1],[0,-1],[1,0],[-1,0]]){ // 4-way only
      let nx=c.x+dxx,ny=c.y+dyy;
      if(nx<0||nx>=cols||ny<0||ny>=rows||!walkableGrid[ny]?.[nx]||closed.has(K(nx,ny))||open.some(o=>o.x===nx&&o.y===ny))continue;
      open.push({x:nx,y:ny,g:c.g+1,f:c.g+1+Math.abs(nx-ex)+Math.abs(ny-ey),parent:c})
    }
  }
  return null
}

function moveRobotTo(tx,ty,cb){
  if(robot.moving)return;
  let p=aStar(Math.round(robot.tileX),Math.round(robot.tileY),Math.round(tx),Math.round(ty));
  if(!p||p.length<2){if(cb)cb(false);return}
  if(p[0].x===Math.round(robot.tileX)&&p[0].y===Math.round(robot.tileY))p.shift();
  robot.path=p;robot.moving=true;robot.moveCallback=cb
}
function updateRobotMovement(dt){
  if(!robot.moving||!robot.path.length){if(robot.moving){robot.moving=false;robot.animFrame=0;if(robot.moveCallback){robot.moveCallback(true);robot.moveCallback=null}}return}
  let sp=CFG.ROBOT_SPEED*dt,t=robot.path[0],dx=t.x-robot.tileX,dy=t.y-robot.tileY,ds=Math.sqrt(dx*dx+dy*dy);
  if(ds<=sp){robot.tileX=t.x;robot.tileY=t.y;robot.path.shift();robot.animFrame++;let s=tileToScreen(robot.tileX,robot.tileY);footprints.push({x:s.x,y:s.y+14*cam.zoom,life:1});if(footprints.length>20)footprints.shift();signalWaves.push({x:s.x,y:s.y,r:2,maxR:12,life:1});if(!robot.path.length){robot.moving=false;robot.animFrame=0;if(robot.moveCallback){robot.moveCallback(true);robot.moveCallback=null}}}
  else{robot.tileX+=dx/ds*sp;robot.tileY+=dy/ds*sp;robot.animFrame+=dt*4}
}

function initGrid(){
  walkableGrid=[];for(let y=0;y<CFG.GRID;y++){walkableGrid[y]=[];for(let x=0;x<CFG.GRID;x++)walkableGrid[y][x]=isOnPlatform(x,y)}
  buildings.forEach(b=>{for(let dy=0;dy<Math.ceil(b.h);dy++)for(let dx=0;dx<Math.ceil(b.w);dx++){const gx=b.tx+dx,gy=b.ty+dy;if(gx>=0&&gx<CFG.GRID&&gy>=0&&gy<CFG.GRID)walkableGrid[gy][gx]=false}})
}

/* ═══════════════════════════════════════════════════════
   DRAWING
   ═══════════════════════════════════════════════════════ */

// — Accurate Isometric Block Drawing
function drawIsoBlock(ctxx, bx, by, bw, bh, color, opacity, isHouse) {
  const hw = CFG.TILE_HALF_W * cam.zoom, hh = CFG.TILE_HALF_H * cam.zoom;
  const pixH = bh * hh * 2; // Building height in pixels
  const wPix = bw * hw;    // Building width in pixels
  const hPix = bw * hh;    // Building depth height in pixels
  
  const o = opacity || 1;
  ctxx.globalAlpha = o;
  
  if(o > 0.7) { ctxx.shadowColor = color; ctxx.shadowBlur = 12 * cam.zoom; }

  // Points for the block (bx, by is the ground center)
  const bottom = { x: bx, y: by };
  const left = { x: bx - wPix, y: by - hPix };
  const right = { x: bx + wPix, y: by - hPix };
  const centerTop = { x: bx, y: by - 2 * hPix };
  
  // Roof points (shifted up by pixH)
  const rBottom = { x: bottom.x, y: bottom.y - pixH };
  const rLeft = { x: left.x, y: left.y - pixH };
  const rRight = { x: right.x, y: right.y - pixH };
  const rTop = { x: centerTop.x, y: centerTop.y - pixH };

  // 1. LEFT WALL
  ctxx.fillStyle = darken(color, 0.55);
  ctxx.beginPath();
  ctxx.moveTo(bottom.x, bottom.y); ctxx.lineTo(left.x, left.y);
  ctxx.lineTo(rLeft.x, rLeft.y); ctxx.lineTo(rBottom.x, rBottom.y);
  ctxx.closePath(); ctxx.fill();

  // 2. RIGHT WALL
  ctxx.fillStyle = darken(color, 0.35);
  ctxx.beginPath();
  ctxx.moveTo(bottom.x, bottom.y); ctxx.lineTo(right.x, right.y);
  ctxx.lineTo(rRight.x, rRight.y); ctxx.lineTo(rBottom.x, rBottom.y);
  ctxx.closePath(); ctxx.fill();

  // 3. ROOF
  if(isHouse) {
    const rh = 45 * cam.zoom; 
    // Midpoints for the gable peaks
    const P1 = { x: (rLeft.x + rBottom.x)/2, y: (rLeft.y + rBottom.y)/2 - rh };
    const P2 = { x: (rRight.x + rTop.x)/2, y: (rRight.y + rTop.y)/2 - rh };

    // Gable End (Front-Left triangle) - sit flush on the wall
    ctxx.fillStyle = darken(color, 0.55);
    ctxx.beginPath();
    ctxx.moveTo(rLeft.x, rLeft.y);
    ctxx.lineTo(rBottom.x, rBottom.y);
    ctxx.lineTo(P1.x, P1.y);
    ctxx.closePath();
    ctxx.fill();

    // Right Roof Face
    ctxx.fillStyle = color;
    ctxx.beginPath();
    ctxx.moveTo(rBottom.x, rBottom.y);
    ctxx.lineTo(rRight.x, rRight.y);
    ctxx.lineTo(P2.x, P2.y);
    ctxx.lineTo(P1.x, P1.y);
    ctxx.closePath();
    ctxx.fill();

    // Left Roof Face (Back sloping)
    ctxx.fillStyle = darken(color, 0.2);
    ctxx.beginPath();
    ctxx.moveTo(rLeft.x, rLeft.y);
    ctxx.lineTo(rTop.x, rTop.y);
    ctxx.lineTo(P2.x, P2.y);
    ctxx.lineTo(P1.x, P1.y);
    ctxx.closePath();
    ctxx.fill();
  } else {
    ctxx.fillStyle = color;
    ctxx.beginPath();
    ctxx.moveTo(rBottom.x, rBottom.y); ctxx.lineTo(rRight.x, rRight.y);
    ctxx.lineTo(rTop.x, rTop.y); ctxx.lineTo(rLeft.x, rLeft.y);
    ctxx.closePath(); ctxx.fill();
    // Add a small antenna for towers
    ctxx.strokeStyle = color; ctxx.lineWidth = 2*cam.zoom;
    ctxx.beginPath(); ctxx.moveTo(rTop.x, rTop.y); ctxx.lineTo(rTop.x, rTop.y - 20*cam.zoom); ctxx.stroke();
  }

  // 4. WINDOWS
  ctxx.fillStyle = 'rgba(255,255,255,0.6)';
  const winW = 3 * cam.zoom, winH = 4 * cam.zoom;
  for(let i=1; i<4; i++) {
    for(let j=1; j<Math.floor(bh); j++) {
      ctxx.fillRect(bx - (wPix/4)*i, by - pixH + (j*hh*2) - hPix/2, winW, winH);
      ctxx.fillRect(bx + (wPix/4)*i, by - pixH + (j*hh*2) - hPix/2, winW, winH);
    }
  }

  ctxx.shadowBlur = 0;
  ctxx.globalAlpha = 1;
}

// — Ground path
function drawGroundPath(ctxx){/* removed */}

// — Zone order numbers
function drawZoneOrder(ctxx,zone){const p=tileToScreen(zone.tile[0],zone.tile[1]);ctxx.fillStyle=zone.accent;ctxx.beginPath();ctxx.arc(p.x+20,p.y-30,10,0,Math.PI*2);ctxx.fill();ctxx.fillStyle='#050a0f';ctxx.font='bold 11px Orbitron,monospace';ctxx.textAlign='center';ctxx.textBaseline='middle';ctxx.fillText(zone.order,p.x+20,p.y-30)}

// — Ground
function drawGround(){
  ctx.fillStyle='rgba(200,220,255,.15)';for(let i=0;i<300;i++){const sx=(i*137.5+42)%W,sy=(i*191.7+13)%H;ctx.fillRect(sx,sy,1,1)}
  const cx=tileToScreen(CFG.CENTER,CFG.CENTER),grad=ctx.createRadialGradient(cx.x,cx.y+80*cam.zoom,0,cx.x,cx.y+80*cam.zoom,300*cam.zoom);grad.addColorStop(0,'rgba(0,255,231,.04)');grad.addColorStop(1,'rgba(0,255,231,0)');
  ctx.fillStyle=grad;ctx.beginPath();ctx.arc(cx.x,cx.y+80*cam.zoom,300*cam.zoom,0,Math.PI*2);ctx.fill();
  const hw=CFG.TILE_HALF_W*cam.zoom,hh=CFG.TILE_HALF_H*cam.zoom;
  for(let sum=0;sum<=CFG.GRID*2;sum++)for(let x=0;x<CFG.GRID;x++){let y=sum-x;if(y<0||y>=CFG.GRID)continue;let p=tileToScreen(x,y),isEdge=!isOnPlatform(x-1,y)||!isOnPlatform(x+1,y)||!isOnPlatform(x,y-1)||!isOnPlatform(x,y+1);
  if(!isOnPlatform(x,y)){
    // Background streets
    if(x%5===0||y%5===0){ctx.fillStyle='rgba(10,20,30,.3)';ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p.x+hw,p.y+hh);ctx.lineTo(p.x,p.y+2*hh);ctx.lineTo(p.x-hw,p.y+hh);ctx.closePath();ctx.fill()}
    continue;
  }
  ctx.beginPath();ctx.moveTo(p.x+hw,p.y+hh);ctx.lineTo(p.x+hw,p.y+hh+4);ctx.lineTo(p.x,p.y+2*hh+4);ctx.lineTo(p.x,p.y+2*hh);ctx.closePath();ctx.fillStyle='#071422';ctx.fill();
  ctx.beginPath();ctx.moveTo(p.x-hw,p.y+hh);ctx.lineTo(p.x-hw,p.y+hh+4);ctx.lineTo(p.x,p.y+2*hh+4);ctx.lineTo(p.x,p.y+2*hh);ctx.closePath();ctx.fillStyle='#091828';ctx.fill();
  ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p.x+hw,p.y+hh);ctx.lineTo(p.x,p.y+2*hh);ctx.lineTo(p.x-hw,p.y+hh);ctx.closePath();ctx.fillStyle=isEdge?'#07131f':'#0c1e2e';ctx.fill();
  ctx.strokeStyle=`rgba(10,42,58,${.6*cam.zoom})`;ctx.lineWidth=.5;ctx.stroke();
  // Circuit board traces
  if((x+y)%4===0){ctx.fillStyle='rgba(0,255,231,.08)';ctx.beginPath();ctx.arc(p.x,p.y+hh,2*cam.zoom,0,Math.PI*2);ctx.fill()}
  if((x*7+y*13)%4===0&&x<CFG.GRID-1){ctx.strokeStyle='rgba(0,255,231,.07)';ctx.lineWidth=.8;ctx.beginPath();ctx.moveTo(p.x,p.y+hh);ctx.lineTo(p.x+hw*2,p.y+hh);ctx.stroke()}
  if((x*5+y*11)%6===0&&y<CFG.GRID-1){ctx.strokeStyle='rgba(0,136,255,.06)';ctx.lineWidth=.8;ctx.beginPath();ctx.moveTo(p.x,p.y+hh);ctx.lineTo(p.x,p.y+2*hh);ctx.stroke()}
  // Data node rings
  if((x*13+y*17)%8===0){ctx.strokeStyle='rgba(0,255,231,.07)';ctx.lineWidth=.5;ctx.beginPath();ctx.arc(p.x,p.y+hh,3*cam.zoom,0,Math.PI*2);ctx.stroke();ctx.fillStyle='rgba(0,255,231,.04)';ctx.fill()}
  if(isEdge){ctx.strokeStyle='rgba(0,255,231,.4)';ctx.lineWidth=1.5*cam.zoom;ctx.beginPath();ctx.moveTo(p.x-hw,p.y+hh);ctx.lineTo(p.x,p.y);ctx.lineTo(p.x+hw,p.y+hh);ctx.stroke();ctx.fillStyle='#040d17';ctx.beginPath();ctx.moveTo(p.x-hw,p.y+hh+4);ctx.lineTo(p.x,p.y+2*hh+4);ctx.lineTo(p.x+hw,p.y+hh+4);ctx.lineTo(p.x,p.y+2*hh+8);ctx.lineTo(p.x-hw,p.y+hh+8);ctx.closePath();ctx.fill();ctx.strokeStyle='rgba(0,255,231,.3)';ctx.lineWidth=.5;ctx.beginPath();ctx.moveTo(p.x-hw,p.y+hh+8);ctx.lineTo(p.x,p.y+2*hh+8);ctx.lineTo(p.x+hw,p.y+hh+8);ctx.stroke()}
  }
  drawGroundPath(ctx);
  PORTFOLIO.zones.forEach(z=>drawZoneOrder(ctx,z));
  for(let i=footprints.length-1;i>=0;i--){const f=footprints[i];f.life-=.005;if(f.life<=0){footprints.splice(i,1);continue}ctx.fillStyle=`rgba(0,255,231,${f.life*.3})`;ctx.beginPath();ctx.ellipse(f.x-4*cam.zoom,f.y,3*cam.zoom,1.5*cam.zoom,0,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.ellipse(f.x+4*cam.zoom,f.y,3*cam.zoom,1.5*cam.zoom,0,0,Math.PI*2);ctx.fill()}
// Vignette overlay
const vg=ctx.createRadialGradient(W/2,H/2,H*.3,W/2,H/2,Math.max(W,H)*.7);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(.7,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,0,0,.55)');
ctx.fillStyle=vg;ctx.fillRect(0,0,W,H);
}

// — Building shapes (v4.0 solid)
function drawBuilding(b){
  const {tx,ty,w,h,color,type,id,hovered,opacity} = b;
  const p = tileToScreen(tx + w/2, ty + w/2);
  const glow = hovered || visitedZones.has(id) ? 1 : 0.7;
  
  drawIsoBlock(CTX, p.x, p.y, w, h, color, opacity || glow * 0.9, type === 'house');

  if(id){
    const sz = 13 * cam.zoom;
    ctx.save();
    ctx.font = `bold ${sz}px Orbitron,monospace`;
    ctx.textAlign = 'center';
    const m = ctx.measureText(`[${id}]`);
    const pw = m.width + 16*cam.zoom, ph = 22*cam.zoom;
    ctx.fillStyle = 'rgba(5,10,15,0.85)';
    ctx.fillRect(p.x - pw/2, p.y - (h*CFG.TILE_HALF_H*2)*cam.zoom - 80*cam.zoom, pw, ph); // Increased offset
    ctx.fillStyle = color;
    ctx.fillText(`[${id}]`, p.x, p.y - (h*CFG.TILE_HALF_H*2)*cam.zoom - 64*cam.zoom); // Increased offset
    ctx.restore();
  }
}

// — Robot
function drawRobot(ctxx,x,y,scale,attention,state){
const s=scale||cam.zoom;const pos=(x!=null)?{x,y}:tileToScreen(robot.tileX,robot.tileY);const rs=pos.x,ys=pos.y;if(!x&&!y){robot.screenX=rs;robot.screenY=ys}
const t=Date.now(),bob=Math.sin(t*.003)*2*s,bx=rs,by=ys-10*s+bob;const isAttn=attention||robot.attentionPose;
ctxx.fillStyle='rgba(0,255,231,.08)';ctxx.beginPath();ctxx.ellipse(rs,ys+16*s,12*s,4*s,0,0,Math.PI*2);ctxx.fill();
const legAnim=robot.moving?Math.sin(robot.animFrame*.5)*3:0,armSwing=isAttn?0:robot.moving?Math.sin(robot.animFrame*.5)*4:0;
ctxx.fillStyle='#0d2535';ctxx.strokeStyle='rgba(0,255,231,.7)';ctxx.lineWidth=1*s;
ctxx.fillRect(bx-5*s,by+12*s+legAnim,4*s,8*s);ctxx.strokeRect(bx-5*s,by+12*s+legAnim,4*s,8*s);ctxx.fillRect(bx+1*s,by+12*s-legAnim,4*s,8*s);ctxx.strokeRect(bx+1*s,by+12*s-legAnim,4*s,8*s);
ctxx.fillStyle='rgba(0,255,231,.7)';ctxx.fillRect(bx-6*s,by+20*s+legAnim,6*s,2*s);ctxx.fillRect(bx+0*s,by+20*s-legAnim,6*s,2*s);
ctxx.fillStyle='#0d2535';ctxx.strokeStyle='rgba(0,255,231,.7)';ctxx.lineWidth=1*s;ctxx.fillRect(bx-7*s,by+0*s,14*s,14*s);ctxx.strokeRect(bx-7*s,by+0*s,14*s,14*s);
ctxx.fillStyle='rgba(0,255,231,.15)';for(let i=0;i<3;i++)ctxx.fillRect(bx-4*s,by+4*s+i*3*s,8*s,1*s);
ctxx.fillStyle=`rgba(0,136,255,${.3+Math.sin(t*.003)*.1})`;ctxx.fillRect(bx-2*s,by+2*s,4*s,3*s);
if(state==='thinking'){for(let i=0;i<3;i++){const ph=(t+i*300)%900;ctxx.fillStyle=`rgba(0,255,231,${ph<300?.9:.2})`;ctxx.beginPath();ctxx.arc(bx-8+i*10,by-6*s-16,3,0,Math.PI*2);ctxx.fill()}}
if(state==='talking'){const mw=12+Math.sin(t*.015)*6;ctxx.fillStyle='rgba(0,255,231,.7)';ctxx.fillRect(bx-mw/2,by-6*s+2,mw,2);ctxx.fillStyle=`rgba(0,136,255,${.4+Math.sin(t*.01)*.3})`;ctxx.fillRect(bx-6,by-6*s+4,12,6)}
if(state==='error'){ctxx.fillStyle='rgba(255,100,100,.9)';ctxx.fillRect(bx-9,by-6*s-3,5,2);ctxx.fillRect(bx+4,by-6*s-3,5,2);return}
ctxx.beginPath();ctxx.moveTo(bx-7*s,by+2*s);ctxx.lineTo(bx-11*s,by+5*s);ctxx.lineTo(bx-11*s,by+9*s);ctxx.lineTo(bx-7*s,by+7*s);ctxx.closePath();ctxx.fillStyle='#0d2535';ctxx.strokeStyle='rgba(0,255,231,.5)';ctxx.lineWidth=1*s;ctxx.fill();ctxx.stroke();
ctxx.beginPath();ctxx.moveTo(bx+7*s,by+2*s);ctxx.lineTo(bx+11*s,by+5*s);ctxx.lineTo(bx+11*s,by+9*s);ctxx.lineTo(bx+7*s,by+7*s);ctxx.closePath();ctxx.fill();ctxx.stroke();
ctxx.strokeStyle='rgba(0,255,231,.5)';ctxx.lineWidth=2*s;
if(isAttn){ctxx.beginPath();ctxx.moveTo(bx+11*s,by+6*s);ctxx.lineTo(bx+16*s,by-4*s);ctxx.stroke();ctxx.beginPath();ctxx.moveTo(bx-11*s,by+6*s);ctxx.lineTo(bx-14*s,by+12*s);ctxx.stroke()}
else{ctxx.beginPath();ctxx.moveTo(bx-11*s,by+6*s);ctxx.lineTo(bx-14*s,by+12*s+armSwing);ctxx.stroke();ctxx.beginPath();ctxx.moveTo(bx+11*s,by+6*s);ctxx.lineTo(bx+14*s,by+12*s-armSwing);ctxx.stroke()}
ctxx.fillStyle='#1a3a4a';ctxx.strokeStyle='rgba(0,255,231,.7)';ctxx.lineWidth=1*s;const tilt=isAttn?Math.sin(t*.003)*5:robot.moving?Math.sin(robot.animFrame*.3)*3:0;ctxx.save();ctxx.translate(bx,by-6*s);ctxx.rotate(tilt*Math.PI/180);
ctxx.fillRect(-4*s,-5*s,8*s,7*s);ctxx.strokeRect(-4*s,-5*s,8*s,7*s);
robot.blinkTimer--;if(robot.blinkTimer<=0)robot.blinkTimer=2000+Math.random()*3000;const eH=robot.blinkTimer>80?2*s:.5*s;
ctxx.fillStyle=isAttn?'#ffffff':'#00ffe7';ctxx.fillRect(-3*s,-3*s,2.5*s,eH);ctxx.fillRect(.5*s,-3*s,2.5*s,eH);
ctxx.strokeStyle='rgba(0,255,231,.4)';ctxx.lineWidth=1*s;ctxx.beginPath();ctxx.moveTo(0,-5*s);ctxx.lineTo(0,-11*s);ctxx.stroke();
ctxx.fillStyle=`rgba(0,255,231,${.4+Math.sin(t*.005)*.2})`;ctxx.beginPath();ctxx.arc(0,-11*s,1.5*s,0,Math.PI*2);ctxx.fill();ctxx.restore();
if(robot.isScanning){ctxx.strokeStyle=`rgba(0,255,231,${.3+Math.sin(robot.scanTimer*.1)*.2})`;ctxx.lineWidth=1*s;const sy=by-14*s+Math.abs(Math.sin(robot.scanTimer*.05))*28*s;ctxx.beginPath();ctxx.moveTo(bx-18*s,sy);ctxx.lineTo(bx+18*s,sy);ctxx.stroke();robot.scanTimer++;if(robot.scanTimer>120){robot.isScanning=false;robot.scanTimer=0}}
if(Math.floor(Date.now()/8000)!==Math.floor((Date.now()-16)/8000))signalWaves.push({x:rs,y:ys,r:2,maxR:30*s,life:1})
}

// — Rain & effects
function initRain(){rainDrops=[];for(let i=0;i<200;i++)rainDrops.push({x:Math.random()*W,y:Math.random()*H,speed:.8+Math.random()*1.5,len:6+Math.random()*10,opacity:.1+Math.random()*.2})}
function drawRain(){for(const d of rainDrops){const ne=Math.sin(d.y*.003+d.x*.005)*.15;ctx.strokeStyle=`rgba(160,200,255,${d.opacity+ne})`;ctx.lineWidth=.8;ctx.beginPath();ctx.moveTo(d.x,d.y);ctx.lineTo(d.x-4,d.y+d.len);ctx.stroke();if(Math.random()<.02){ctx.fillStyle=`rgba(0,255,231,${d.opacity*.3})`;ctx.beginPath();ctx.arc(d.x,d.y+d.len*.5,2,0,Math.PI*2);ctx.fill()}d.y+=d.speed*.8;d.x-=1.2;if(d.y>H+d.len){d.y=-d.len;d.x=Math.random()*W}if(d.x<-20)d.x=W+10}}
function drawSignalWaves(){for(let i=signalWaves.length-1;i>=0;i--){const w=signalWaves[i];w.r+=.5;w.life-=.02;if(w.life<=0){signalWaves.splice(i,1);continue}ctx.strokeStyle=`rgba(0,255,231,${w.life*.4})`;ctx.lineWidth=.5;ctx.beginPath();ctx.arc(w.x,w.y,w.r,0,Math.PI*2);ctx.stroke()}}
function getBuildingAt(sx,sy){for(let i=buildings.length-1;i>=0;i--){const b=buildings[i],p=tileToScreen(b.tx,b.ty);const dx=sx-p.x,dy=sy-(p.y+b.h*CFG.TILE_HALF_H*cam.zoom/2+b.w*CFG.TILE_HALF_W*cam.zoom/4);if(Math.abs(dx)/(b.w*CFG.TILE_HALF_W*cam.zoom/2+4)+Math.abs(dy)/(b.h*CFG.TILE_HALF_H*cam.zoom/2+b.w*CFG.TILE_HALF_W*cam.zoom/4+4)<=1.2)return b}return null}

/* ═══════════════════════════════════════════════════════
   POPUP TEMPLATES + GALLERY (Verbetering 6)
   ═══════════════════════════════════════════════════════ */
const PT={};
function galleryHTML(imgs){if(!imgs||!imgs.length)return'';return`<div class="popup-gallery-column"><div class="cyber-image-frame" onclick="document.getElementById('lightbox').classList.add('visible');document.getElementById('lightbox-img').src=document.getElementById('main-gallery-img').src"><img src="${imgs[0]}" alt="foto" id="main-gallery-img"><div class="cyber-scanline-overlay"></div></div><div class="cyber-gallery-thumbnails">${imgs.map((s,i)=>`<img src="${s}" class="thumb${i===0?' active':''}" onclick="document.getElementById('main-gallery-img').src='${s}';document.querySelectorAll('.thumb').forEach((t,j)=>t.className='thumb'+(j===${i}?' active':''))">`).join('')}</div></div>`}
const GALLERIES={
profile:['/media/profile/Luis.JPG'],
skills:['/media/pop_sessies/team_1.jpg','/media/pop_sessies/team_2.jpg'],
hannover:['/media/belefeld/IMG_2452.jpg','/media/hannover/IMG_2483.jpg','/media/hannover/IMG_2462.jpg','/media/hannover/IMG_2469.jpg','/media/Berlijn/IMG_2535.jpg','/media/Berlijn/IMG_2545.jpg','/media/chaos_computer_club/ccc.jpg'],
hackathon:['/media/hackathon/IMG_1041.jpg','/media/hackathon/IMG_1040.jpg','/media/hackathon/IMG_1036.jpg'],
seminaries:['/media/seminaries/jackie_jansens.jpg','/media/seminaries/jackie jansens 2.png']
};

function wrapContent(zoneId,textContent){const g=GALLERIES[zoneId];return`<div class="popup-content-wrapper"><div class="popup-text-column">${textContent}</div>${g?galleryHTML(g):''}</div>`}

PT.profile=z=>wrapContent(z.template,`<div class="panel-section"><div class="panel-section-title">// IDENT_DATA</div><div class="panel-data-row"><span class="label">NAME:</span><span class="value">${PORTFOLIO.owner.name}</span></div><div class="panel-data-row"><span class="label">ORIGIN:</span><span class="value">${PORTFOLIO.owner.origin}</span></div><div class="panel-data-row"><span class="label">CLASS:</span><span class="value">${PORTFOLIO.owner.title}</span></div><div class="panel-data-row"><span class="label">STATUS:</span><span class="value">${PORTFOLIO.owner.school} · ${PORTFOLIO.owner.year}</span></div></div><div class="panel-section"><div class="panel-section-title">// BIO_LOG</div><div class="panel-body-text">Geboren in de Dominicaanse Republiek, opgegroeid in Spanje waar ik als 4-jarige mijn vader al hielp met computers bouwen. Na een terugkeer naar DR verhuisde ik op mijn 13e naar België. Die mix van culturen heeft me flexibel en veerkrachtig gemaakt.</div><div class="panel-body-text" style="margin-top:8px;">Vandaag studeer ik Toegepaste Informatica met specialisatie AI aan PXL Hasselt. Mijn passie ligt bij het combineren van slimme code met fysieke hardware — robotica is mijn ultieme doel. Naast technologie breng ik tijd door op de BJJ-mat of het honkbalveld, waar discipline en teamwerk centraal staan.</div></div><div class="panel-section"><div class="panel-section-title">// PARAMETERS</div>${PORTFOLIO.personalityStats.map(s=>`<div class="personality-bar"><span class="bar-label">${s.label}</span><div class="bar-track"><div class="bar-fill" style="background:linear-gradient(90deg, ${s.color}cc, ${s.color})" data-pct="${s.pct}"></div></div><span class="bar-pct">${s.pct}%</span></div>`).join('')}</div><div class="panel-section"><div class="panel-section-title">// AFFILIATIONS</div>${PORTFOLIO.owner.sports.map(s=>`<span class="hex-badge">⬡ ${s}</span>`).join('')}</div>`);
PT.skills=z=>wrapContent(z.template,`<div class="panel-section"><div class="panel-section-title">// TECH_STACK</div><div style="display:flex;flex-wrap:wrap;gap:8px;">${PORTFOLIO.skills.map(s=>`<div class="skill-chip" style="border-color:rgba(0,255,231,.12);background:rgba(0,255,231,.04);width:auto;padding:8px 14px;flex-direction:row;gap:8px;"><span style="font-size:16px">${s.icon}</span><span style="font-size:12px">${s.name}</span></div>`).join('')}</div></div><div class="panel-section"><div class="panel-section-title">// SOFT_SKILLS</div><div style="display:flex;flex-wrap:wrap;gap:6px;">${PORTFOLIO.softSkills.map(s=>`<span class="hex-badge" style="background:rgba(0,255,231,.06);border-color:rgba(0,255,231,.12);clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%);padding:10px 16px;display:inline-block;">${s}</span>`).join('')}</div></div>`);
PT.hannover=z=>wrapContent(z.template,`<div class="panel-section"><div class="panel-section-title">// DEPLOYMENT_INFO</div><div class="panel-data-row"><span class="label">LOCATIE:</span><span class="value">Bielefeld · Hannover · Berlijn</span></div><div class="panel-data-row"><span class="label">DATUM:</span><span class="value">22–26 April 2026</span></div><div class="panel-data-row"><span class="label">TYPE:</span><span class="value">Internationale Studiereis (5 dagen)</span></div></div><div class="panel-section"><div class="panel-section-title">// CHRONOLOGY</div><div class="timeline"><div class="timeline-event"><div class="event-title">◈ BIELEFELD — Hochschule bezoek</div><div class="event-desc">Kennismaking met de Duitse academische aanpak. Studenten uit heel de wereld delen hun passie voor technologie. Een rustige start om te landen in een nieuwe omgeving.</div></div><div class="timeline-event"><div class="event-title">◈ HANNOVER MESSE — Beurs</div><div class="event-desc">Een van de grootste technologiebeurzen ter wereld. Autonome robots, neurale netwerken in actie. Het besef dat ik de technologie achter de machines begrijp was een enorme opsteker voor mijn zelfvertrouwen. Ik kon op gelijkwaardig niveau met experts communiceren.</div></div><div class="timeline-event"><div class="event-title">◈ BERLIJN — Chaos Computer Club</div><div class="event-desc">Diepgaand gesprek met security-experts over kwetsbaarheden en ethiek. Het zette me met beide voeten op de grond over hoe fragiel digitale systemen zijn. Berlijn zelf ontdekken was de kers op de taart.</div></div></div></div><div class="quote-box">"Waar ik drie jaar geleden naar een robot keek als magie, kon ik nu de neurale netwerken en de logica erachter herkennen."</div>`);
PT.hackathon=z=>wrapContent(z.template,`<div class="panel-section"><div class="panel-section-title">// MISSION_SPECS</div><div class="panel-data-row"><span class="label">LOCATIE:</span><span class="value">Flanders Meeting Center, Antwerpen</span></div><div class="panel-data-row"><span class="label">DATUM:</span><span class="value">12 November 2025</span></div><div class="panel-data-row"><span class="label">CHALLENGE:</span><span class="value">Discoverers of the Great DBArrier Reef</span></div><div class="panel-data-row"><span class="label">TEAM:</span><span class="value">2 personen, 1 laptop</span></div><div class="panel-data-row"><span class="label">RESULT:</span><span class="value" style="color:var(--neon-cyan); font-weight: 700">✓ COMPLETED</span></div></div><div class="panel-section"><div class="panel-section-title">// LOG_OUTPUT</div><div class="terminal-line"><span class="prompt">></span> SSH verbinding — remote server <span class="status-ok">✓</span></div><div class="terminal-line"><span class="prompt">></span> Privilege escalatie via sudo script <span class="status-ok">ROOT ✓</span></div><div class="terminal-line"><span class="prompt">></span> SQL injection — kwetsbaarheden exploiten <span class="status-ok">EXPLOITED ✓</span></div><div class="terminal-line"><span class="prompt">></span> Database logs analyse — root cause found <span class="status-ok">✓</span></div><div class="terminal-line"><span class="prompt">></span> Alle challenges opgelost binnen tijdslimiet <span class="highlight">MISSION COMPLETE 100%</span></div></div><div class="panel-section"><div class="panel-section-title">// REFLECTION</div><div class="panel-body-text">Mijn eerste hackathon! Het werken op één laptop dwong ons tot pair programming. Mijn rustige houding was cruciaal toen de database bleef crashen — in plaats van in paniek te raken, bleef ik methodisch de mappenstructuur analyseren tot we de juiste ingang vonden.</div></div><div class="quote-box" style="border-left-color:var(--neon-pink);background:rgba(255,45,120,.06)">"Calm under pressure — methodisch blijven denken als de deadline dichtbij komt."</div>`);
PT.sap=z=>wrapContent(z.template,`<div class="panel-section"><div class="panel-section-title">// LAB_INTEL</div><div class="panel-data-row"><span class="label">ORGANISATIE:</span><span class="value">Flexso (Chronos Group), Hasselt</span></div><div class="panel-data-row"><span class="label">DATUM:</span><span class="value">9–16 Oktober 2025</span></div><div class="panel-data-row"><span class="label">FOCUS:</span><span class="value">Generatieve AI · SAP BTP · Joule Agents</span></div></div><div class="panel-section"><div class="panel-section-title">// CONCEPTS_MASTERED</div><div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">${[{t:'MODEL DISTILLATIE',s:'Teacher→Student kennisoverdracht'},{t:'JOULE AGENTS',s:'AI-gestuurde assistenten'},{t:'TRANSFORMER ARCHITECTUUR',s:'LeNet tot GPT'},{t:'SAP BTP ECOSYSTEEM',s:'Enterprise AI platform'}].map(c=>`<div class="tech-card" style="width:100%; margin:0;"><div class="card-title">${c.t}</div><div class="card-sub">${c.s}</div></div>`).join('')}</div></div><div class="panel-section"><div class="panel-section-title">// REFLECTION</div><div class="panel-body-text">Ik had verwacht dat het bouwen van de festival-app via SAP BTP een vlot proces zou zijn. De realiteit: de omgeving correct configureren vereist nog steeds diepgaande technische kennis. Dit leerde me dat je als AI-specialist elke laag van het systeem moet begrijpen om de controle te behouden. Model distillatie opende mijn ogen — het slaat de brug tussen research en bruikbare software voor eindgebruikers.</div></div><div class="quote-box" style="border-left-color:var(--neon-cyan);background:rgba(0,255,231,.06)">"Een krachtige tool versnelt het proces, maar je moet weten wat er onder de motorkap gebeurt."</div>`);
PT.seminaries=z=>wrapContent(z.template,`<div class="panel-section"><div class="panel-section-title">// AGGREGATED_TIME</div><div style="font-family:'Orbitron',sans-serif;font-size:28px;color:var(--neon-amber);text-shadow: 0 0 20px var(--neon-amber)">TOTAL: 23u</div></div><div class="panel-section"><div class="panel-section-title">// ATTENDANCE_LOG</div>${PORTFOLIO.seminars.map(s=>`<div class="seminar-entry"><span class="sem-date">[${s.date}]</span><span class="sem-title">${s.title}</span><span class="sem-org">· ${s.org} (${s.dur})</span><div style="font-size:13px;color:var(--text-secondary);margin-top:2px;padding-left:80px;">${s.desc}</div></div>`).join('')}</div>`);
PT.future=z=>wrapContent(z.template,`<div class="panel-section"><div class="panel-section-title">// STRATEGIC_GOAL</div><div class="panel-body-text">Slimme code + fysieke hardware = robots die verschil maken.</div></div><div class="panel-section"><div class="panel-section-title">// PROJECTION_ROADMAP</div><div class="roadmap-grid" style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">${[{y:'2022',d:'Gestart PXL — AI',f:1},{y:'2024',d:'Specialisatie AI',f:1},{y:'2026',d:'Afstuderen PXL',f:0},{y:'2028',d:'Senior AI/Robotics',f:0}].map(r=>`<div class="roadmap-item ${r.f?'done':''}" style="background:rgba(255,255,255,0.03); padding:10px; border-radius:4px;"><span class="rm-year">${r.y}</span>: <span class="rm-desc">${r.d}</span></div>`).join('')}</div></div><div class="panel-section"><div class="panel-section-title">// COMM_CHANNELS</div><div style="display:flex; flex-wrap:wrap; gap:10px;"><a class="contact-btn" href="https://linkedin.com/in/luisalbertocadete" target="_blank">LINKEDIN</a><a class="contact-btn" href="mailto:lluisalberto24@gmail.com">EMAIL</a><a class="contact-btn contact-btn--cv" href="/Luis_Cadete_CV.pdf.pdf" download style="color:var(--neon-amber);border-color:var(--neon-amber)">↓ DOWNLOAD_CV</a></div></div>`);
PT.projects=z=>wrapContent(z.template,`<div class="panel-section"><div class="panel-section-title">// BIG_DATA & MLOPS</div><div class="panel-body-text">End-to-end CitiBike pipeline: NiFi ingestie, Kafka streaming, Spark batch/live naar HDFS en InfluxDB. DVC versionering, Jenkins CI/CD, MLflow tracking, Evidently drift detectie.</div><div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;">${['NiFi','Kafka','Spark','InfluxDB','Grafana','Jenkins','DVC','MLflow'].map(t=>`<span class="hex-badge" style="font-size:10px;padding:3px 8px;">${t}</span>`).join('')}</div></div><div class="panel-section"><div class="panel-section-title">// GESTURE DRONE CONTROL</div><div class="panel-body-text">AR.Drone besturing via handgebaren in Gazebo kantooromgeving. MediaPipe real-time gesture recognition, custom gesture classifier stuurt ROS-commands.</div><div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;">${['ROS Noetic','Gazebo','MediaPipe','OpenCV','YOLO'].map(t=>`<span class="hex-badge" style="font-size:10px;padding:3px 8px;">${t}</span>`).join('')}</div></div><div class="panel-section"><div class="panel-section-title">// GLUE DETECTOR VISION</div><div class="panel-body-text">Industriele vision pipeline voor baksteen kwaliteitscontrole. Twee-traps deep learning: Mask2Former voor extractie, SegFormer voor lijm-detectie en ratio-berekening.</div><div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;">${['Mask2Former','SegFormer','DVC','Docker','ROS 2'].map(t=>`<span class="hex-badge" style="font-size:10px;padding:3px 8px;">${t}</span>`).join('')}</div></div><div class="panel-section"><div class="panel-section-title">// OCR-MATCHING SYSTEM</div><div class="panel-body-text">Backend voor foto/tekst matching via OCR. Spring Boot microservices, PostgreSQL metadata, MinIO object storage voor 30MB+ images.</div><div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;">${['Spring Boot 3','Java 21','PostgreSQL','MinIO','Swagger','JaCoCo'].map(t=>`<span class="hex-badge" style="font-size:10px;padding:3px 8px;">${t}</span>`).join('')}</div></div><div class="panel-section"><div class="panel-section-title">// DEEP LEARNING & NLP</div><div class="panel-body-text">6 AI-projecten: Credit Card Fraud Detection, Buzzwatch (CNN+Transfer), NLP text classification (Reliable vs Fake). Focus op Explainable AI (LIME/SHAP).</div><div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;">${['TensorFlow','PyTorch','Scikit-learn','XAI','Jupyter'].map(t=>`<span class="hex-badge" style="font-size:10px;padding:3px 8px;">${t}</span>`).join('')}</div></div>`);
PT.reflection=z=>wrapContent(z.template,`<div class="panel-section"><div class="panel-section-title">// TRANSFORMATIE</div><div class="panel-body-text">Als ik terugkijk naar de Luis van drie jaar geleden — die vaak lessen skipte, motivatie miste en midden in een les vertrok — zie ik een persoon die ik nauwelijks herken. Vandaag ben ik een gedreven professional die begrijpt dat succes niet vanzelf komt, maar het resultaat is van discipline, focus en hard werk. Die groei is niet alleen technisch, maar ook mentaal. POP-sessies over concentratie en groepsdynamiek hebben me geleerd hoe ik mijn focus kan bewaken in een wereld vol afleidingen.</div></div><div class="panel-section"><div class="panel-section-title">// X-FACTOR</div><div class="panel-body-text"><b>Passie & Empathie:</b> Van vaders computeratelier naar AI en robotica — technologie zit in mijn bloed.<br><b>Ondernemerschap:</b> Plannen voor eigen zaak in de toekomst, met de ambitie om een probleem te vinden waar ik een oplossing voor kan bouwen.<br><b>Innovatie:</b> Machine learning, neurale netwerken, generatieve AI — ik duik diep in de technologie.<br><b>Samenwerken:</b> Internationale beurzen, hackathons, team challenges, POP-sessies teambuilding en groepswerken — ik werk het best met mensen die kunnen meebewegen met verandering.<br><b>Multidisciplinair:</b> Software en hardware combineren om fysieke robots intelligentie te geven.</div></div><div class="panel-section"><div class="panel-section-title">// TOEKOMST</div><div class="panel-body-text">Eerst ervaring opdoen bij een innovatief roboticabedrijf met een warme sfeer, waar ik kan leren van de beste experts. Daarna de stap naar ondernemerschap — een specifiek probleem vinden waar ik een oplossing voor kan bouwen die echt een verschil maakt. De weg van DR via Spanje naar Belgie heeft me de flexibiliteit en veerkracht gegeven die ik nodig heb om te slagen.</div></div><div class="panel-section"><div class="panel-section-title">// MIJN BOODSCHAP</div><div class="panel-body-text" style="font-style:italic;color:var(--neon-cyan);">"Doe de moeite en lever het werk, want dat is de enige manier om je dromen waar te maken."</div></div>`);
PT.connect=z=>wrapContent(z.template,`<div class="panel-section"><div class="panel-section-title">// DIRECTE_KANALEN</div><div class="contact-grid" style="display:grid; grid-template-columns: 1fr 1fr; gap:15px;">
  <div class="contact-card" style="background:rgba(0,255,231,0.05); border:1px solid rgba(0,255,231,0.15); padding:15px; border-radius:4px;">
    <div style="color:var(--neon-cyan); font-family:var(--font-display); font-size:12px; margin-bottom:5px;">LINKEDIN</div>
    <a href="https://linkedin.com/in/luisalbertocadete" target="_blank" style="color:var(--text-primary); text-decoration:none; font-family:var(--font-mono); font-size:14px;">/in/luisalbertocadete</a>
  </div>
  <div class="contact-card" style="background:rgba(0,255,231,0.05); border:1px solid rgba(0,255,231,0.15); padding:15px; border-radius:4px;">
    <div style="color:var(--neon-cyan); font-family:var(--font-display); font-size:12px; margin-bottom:5px;">GITHUB</div>
    <a href="https://github.com/LuisCadetePXL" target="_blank" style="color:var(--text-primary); text-decoration:none; font-family:var(--font-mono); font-size:14px;">LuisCadetePXL</a>
  </div>
  <div class="contact-card" style="background:rgba(0,255,231,0.05); border:1px solid rgba(0,255,231,0.15); padding:15px; border-radius:4px;">
    <div style="color:var(--neon-cyan); font-family:var(--font-display); font-size:12px; margin-bottom:5px;">EMAIL</div>
    <div style="color:var(--text-primary); font-family:var(--font-mono); font-size:14px;">lluisalberto24@gmail.com</div>
  </div>
  <div class="contact-card" style="background:rgba(0,255,231,0.05); border:1px solid rgba(0,255,231,0.15); padding:15px; border-radius:4px;">
    <div style="color:var(--neon-cyan); font-family:var(--font-display); font-size:12px; margin-bottom:5px;">PHONE</div>
    <div style="color:var(--text-primary); font-family:var(--font-mono); font-size:14px;">+32 466 25 25 07</div>
  </div>
</div></div><div class="panel-section"><div class="panel-section-title">// LOCATION</div><div class="panel-body-text" style="display:flex; align-items:center; gap:10px;"><span style="font-size:24px;">📍</span> Leopoldsburg 3970, België</div></div><div class="panel-section"><div class="panel-section-title">// DOWNLOADS</div><a class="contact-btn" href="/Luis_Cadete_CV.pdf.pdf" download style="display:flex; align-items:center; justify-content:center; gap:10px; padding:15px; background:rgba(255,170,0,0.1); border-color:var(--neon-amber); color:var(--neon-amber); width:100%;"><span style="font-size:20px;">⬇</span> DOWNLOAD VOLLEDIG CV (PDF)</a></div>`);

/* ═══════ POPUP LOGIC ═══════ */
function openZonePopup(idx){
  if(idx<0||idx>=PORTFOLIO.zones.length)return;
  currentZoneIdx=idx;const z=PORTFOLIO.zones[idx];
  
  const popup = document.getElementById('zone-popup');
  const overlay = document.getElementById('popup-overlay');
  
  // Re-trigger animation by removing and adding class
  popup.classList.remove('is-open');
  void popup.offsetWidth; // Force reflow
  
  visitedZones.add(z.id);document.getElementById('zonesCount').textContent=visitedZones.size;
  document.getElementById('popupZoneId').textContent=z.id;
  document.getElementById('popupZoneTitle').textContent=z.title;
  document.getElementById('popupCoords').textContent=`[${z.tile[0]},${z.tile[1]}]`;
  document.getElementById('popupCounter').textContent=`${idx+1}/${PORTFOLIO.zones.length}`;
  document.getElementById('popupBody').innerHTML=(PT[z.template]||(()=>''))(z);
  document.getElementById('popupPrev').disabled=idx<=0;
  document.getElementById('popupNext').disabled=idx>=PORTFOLIO.zones.length-1;
  
  overlay.classList.add('is-visible');
  popup.classList.add('is-open');
  popup.style.borderColor=z.accent+'66';
  
  // Create scanline
  const sl=document.createElement('div');sl.className='popup-scan-line';
  document.getElementById('popupBody').appendChild(sl);
  setTimeout(()=>sl.remove(),1500);
  
  setTimeout(()=>document.querySelectorAll('.bar-fill').forEach(el=>el.style.width=el.dataset.pct+'%'),400);
}
function closeZonePopup(){
  document.getElementById('popup-overlay').classList.remove('is-visible');
  document.getElementById('zone-popup').classList.remove('is-open');
  currentZoneIdx=-1;
  setTimeout(()=>{cam.targetZoom=CFG.ZOOM_DEFAULT},300);
}
document.getElementById('popupClose').addEventListener('click',closeZonePopup);
document.getElementById('popup-overlay').addEventListener('click',closeZonePopup);
document.getElementById('popupPrev').addEventListener('click',()=>openZonePopup(currentZoneIdx-1));
document.getElementById('popupNext').addEventListener('click',()=>openZonePopup(currentZoneIdx+1));

/* ═══════ HAMBURGER ═══════ */
const HM=document.getElementById('hamburger'),MD=document.getElementById('menu-dropdown');
MD.innerHTML=PORTFOLIO.zones.map((z,i)=>`<a href="#" data-zone="${i}"><span class="accent-dot" style="background:${z.accent}"></span>${z.id}</a>`).join('');
HM.addEventListener('click',()=>{HM.classList.toggle('active');MD.classList.toggle('open')});
MD.addEventListener('click',e=>{const l=e.target.closest('a');if(!l)return;e.preventDefault();const idx=parseInt(l.dataset.zone);if(!isNaN(idx)&&buildings[idx]){const b=buildings[idx];moveRobotTo(b.entranceTileX,b.entranceTileY,ok=>{if(ok)setTimeout(()=>openZonePopup(idx),600)})}HM.classList.remove('active');MD.classList.remove('open')});
document.addEventListener('click',e=>{if(!e.target.closest('#hamburger')&&!e.target.closest('#menu-dropdown')){HM.classList.remove('active');MD.classList.remove('open')}});

/* ═══════ MINIMAP ═══════ */
function drawMinimap(){const mw=MINI_CANVAS.width,mh=MINI_CANVAS.height,s=mw/CFG.GRID;MINI_CTX.fillStyle='rgba(5,10,15,.95)';MINI_CTX.fillRect(0,0,mw,mh);for(const b of buildings){const cx=b.tx*s+s/2,cy=b.ty*s+s/2;MINI_CTX.fillStyle=visitedZones.has(b.id)?b.color:`rgba(42,85,112,.5)`;MINI_CTX.fillRect(cx-b.w*s/2,cy-b.h*s/2,b.w*s,b.h*s)}MINI_CTX.fillStyle='#00ffe7';MINI_CTX.beginPath();MINI_CTX.arc(robot.tileX*s,robot.tileY*s,2.5,0,Math.PI*2);MINI_CTX.fill()}
MINI_CANVAS.addEventListener('click',e=>{const r=MINI_CANVAS.getBoundingClientRect(),mx=(e.clientX-r.left)/r.width*MINI_CANVAS.width,my=(e.clientY-r.top)/r.height*MINI_CANVAS.height,s=MINI_CANVAS.width/CFG.GRID;const p=tileToScreen(mx/s,my/s);cam.targetX=W/2-p.x;cam.targetY=H/2-p.y});

/* ═══════ BOOT ═══════ */
const bootEl=document.getElementById('boot'),bootText=document.getElementById('boot-text'),bootSkipEl=document.getElementById('boot-skip');
const bootLines=['INITIALIZING PORTFOLIO_OS v4.0...','LOADING CITY_MAP.............. OK','DEPLOYING UNIT_LUIS........... OK','ESTABLISHING HUD_INTERFACE.... OK','CALIBRATING NEON_GRID......... OK','','WELCOME TO THE CITY.',''];
async function runBoot(){bootText.textContent='';for(const line of bootLines){if(bootAborted)return;if(line===''){bootText.textContent+='\n';continue}for(let i=0;i<line.length;i++){if(bootAborted)return;bootText.textContent+=line[i];await new Promise(r=>setTimeout(r,20+Math.random()*20))}bootText.textContent+='\n';await new Promise(r=>setTimeout(r,150))}await new Promise(r=>setTimeout(r,500));if(!bootAborted){bootEl.classList.add('hidden');bootComplete=true;afterBoot()}}
function skipBoot(){bootAborted=true;bootEl.classList.add('hidden');bootComplete=true;afterBoot()}
bootSkipEl.addEventListener('click',skipBoot);setTimeout(runBoot,300);

/* ═══════ WELCOME ═══════ */
function afterBoot(){cam.targetZoom=CFG.ZOOM_WELCOME;updateCamCenter();setTimeout(()=>showWelcomeDialog(),600)}
function showWelcomeDialog(){document.getElementById('welcome-dialog-container').classList.add('is-visible');document.getElementById('screen-overlay').classList.add('visible');welcomeAnimRunning=true;animateWelcomeRobot()}
function animateWelcomeRobot(){if(!welcomeAnimRunning)return;WELCOME_CTX.clearRect(0,0,160,220);const t=Date.now(),bobY=Math.sin(t*.002)*3;const ga=.06+Math.sin(t*.003)*.03;WELCOME_CTX.fillStyle=`rgba(0,255,231,${ga})`;WELCOME_CTX.beginPath();WELCOME_CTX.ellipse(80,210+bobY,45,12,0,0,Math.PI*2);WELCOME_CTX.fill();drawRobot(WELCOME_CTX,80,105+bobY,3.2,true);if(welcomeAnimRunning)requestAnimationFrame(animateWelcomeRobot)}

document.getElementById('btn-explore').addEventListener('click',startExplore);
document.getElementById('btn-chat').addEventListener('click',startChat);

function startExplore(){
  document.getElementById('welcome-dialog-container').classList.remove('is-visible');
  document.getElementById('screen-overlay').classList.remove('visible');
  welcomeAnimRunning=false;robot.attentionPose=false;
  cam.targetZoom=CFG.ZOOM_DEFAULT;
  setTimeout(()=>{
    document.getElementById('hud-identity').classList.add('visible');
    document.getElementById('hud-minimap').classList.add('visible');
    document.getElementById('hud-zones').classList.add('visible');
    document.getElementById('hamburger').classList.add('visible');
    document.getElementById('hud-top-right').classList.add('visible');
    document.getElementById('hud-instructions').classList.add('visible');
    setTimeout(()=>document.getElementById('hud-instructions').classList.add('hidden'),8000);
  },500);
  document.getElementById('statusFill').style.width='80%';
}

function startChat(){
  document.getElementById('welcome-dialog-container').classList.remove('is-visible');
  document.getElementById('screen-overlay').classList.remove('visible');
  welcomeAnimRunning=false;robot.attentionPose=false;
  openChat();
}

/* ═══════════════════════════════════════════════════════
   CHAT + OLLAMA (Verbetering 2)
   ═══════════════════════════════════════════════════════ */
const SYNTH=window.speechSynthesis;
function setChatState(s){
  chatState=s;
  const dot=document.getElementById('status-dot'),lb=document.getElementById('status-label'),tb=document.getElementById('chat-thinking-bar');
  dot.className='status-dot';
  switch(s){case'idle':lb.textContent='STANDBY';tb.classList.remove('active');break;case'listening':lb.textContent='🎤 LUISTERT...';tb.classList.remove('active');break;case'thinking':dot.classList.add('thinking');lb.textContent='VERWERKT...';tb.classList.add('active');break;case'talking':dot.classList.add('talking');lb.textContent='SPREEKT';tb.classList.remove('active');break;case'error':dot.classList.add('error');lb.textContent='FOUT';tb.classList.remove('active');break}
}

function openChat(){
  chatMode=true;document.getElementById('chat-screen').classList.add('visible');
  setChatState('idle');
  setTimeout(()=>addBotMsg("Hey! Ik ben LUIS_BOT — de digitale versie van Luis, maar dan zonder de koffiepauzes. Stel gerust je vraag over mijn skills, ervaringen of ambitieuze plannen voor werelddominatie... via robotica dan, uiteraard. 🤖"),400);
  if(!chatAnimRunning)chatAnimLoop();
}

function closeChat(){
  chatMode=false;document.getElementById('chat-screen').classList.remove('visible');
  document.getElementById('hud-identity').classList.add('visible');
  document.getElementById('hud-minimap').classList.add('visible');
  document.getElementById('hud-zones').classList.add('visible');
  document.getElementById('hamburger').classList.add('visible');
  document.getElementById('hud-top-right').classList.add('visible');
}
document.getElementById('chat-back-btn').addEventListener('click',closeChat);

function addBotMsg(t){const el=document.getElementById('chat-messages'),d=document.createElement('div');d.className='chat-msg chat-msg--robot';d.innerHTML=`<span class="chat-msg__label">UNIT_LUIS</span><div class="chat-msg__bubble">${t}</div>`;el.appendChild(d);el.scrollTop=el.scrollHeight}
function addUserMsg(t){const el=document.getElementById('chat-messages'),d=document.createElement('div');d.className='chat-msg chat-msg--user';d.innerHTML=`<span class="chat-msg__label">VISITOR</span><div class="chat-msg__bubble">${t}</div>`;el.appendChild(d);el.scrollTop=el.scrollHeight}

const CI=document.getElementById('chat-input'),BS=document.getElementById('btn-send'),BM=document.getElementById('btn-mic'),BT=document.getElementById('btn-tts');

// — Ollama API (Verbetering 2)
const SYSTEM_PROMPT=`Je bent LUIS_BOT — de officiële digitale representatie van Luis Alberto Cadete Rosario.
STRIKTE REGELS:
1. Beantwoord ALLEEN vragen over Luis (zijn bio, skills, projecten), Toegepaste Informatica, AI, en de tech sector.
2. Als een vraag NIET over deze onderwerpen gaat, zeg dan: "Sorry, mijn databank is strikt beperkt tot informatie over Luis en zijn tech-expertise. Stel gerust een vraag over zijn parcours of AI!"
3. Praat ALTIJD als Luis (ik, mijn). Nederlands.
4. Wees accuraat en wijk NOOIT af naar andere onderwerpen.
BIO: Luis, AI-student @ PXL. Skills: Python, ML, Neural Networks. Ervaring: Hannover Messe, Hack The Future.`;

const FALLBACKS=[
  {match:q=>/wie|voorstellen|oud|leeftijd|jaar|parcours|afkomst/i.test(q),reply:"Ik ben Luis, 22 jaar, AI-student aan PXL. Geboren in Spanje, opgegroeid in de Dominicaanse Republiek, en nu woonachtig in België. Mijn passie ligt bij AI en robotica."},
  {match:q=>/skill|kennis|programmeer|python|ml|ai|taal|ervaring/i.test(q),reply:"Mijn kernexpertise is Python en Machine Learning. Ik werk veel met neurale netwerken, SQL en Linux. Ik volg ook SAP BTP innovaties op de voet."},
  {match:q=>/kracht|kalm|pressure|sterk|eigenschap|sport/i.test(q),reply:"Mijn grootste kracht is kalmte onder druk. Dit heb ik ontwikkeld door Braziliaans Jiu-Jitsu en honkbal. Ik blijf methodisch, zelfs bij complexe technische uitdagingen."},
  {match:q=>/toekomst|plan|ambitie|doel|startup|afstuderen/i.test(q),reply:"In 2026 studeer ik af. Mijn doel is om als Junior in de robotica sector te starten en uiteindelijk mijn eigen tech-startup op te richten."},
  {match:q=>/hack|hackathon|challenge|antwerpen/i.test(q),reply:"Tijdens Hack The Future in Antwerpen kraakten we als team alle database en privilege escalation challenges. Kalm blijven was daar de sleutel tot succes."},
  {match:q=>/duitsland|hannover|berlijn|messe|studiereis/i.test(q),reply:"De Hannover Messe was indrukwekkend. Het herkennen van neurale netwerken in industriële robots gaf me veel vertrouwen in mijn eigen opleiding."},
  {match:q=>/sap|flexso|innovatie|btp/i.test(q),reply:"Bij Flexso heb ik gewerkt met model distillatie en Joule Agents. Het leerde me dat je elke laag van een AI-systeem moet begrijpen om het echt te beheersen."},
  {match:q=>/contact|email|linkedin|github|cv/i.test(q),reply:"Je kunt me bereiken via LinkedIn (luisalbertocadete) of e-mail (lluisalberto24@gmail.com). Mijn CV is ook direct downloadbaar in dit HUD."},
  {match:q=>/project|school|big.data|mlops|drone|gesture|glue|detector|ocr|matching|deep.learning/i.test(q),reply:"Ik heb 5 grote projecten: Big Data/MLOps pipeline (NiFi/Kafka/Spark), Gesture Drone (ROS), Glue Detector (vision AI), OCR-Matching (Spring Boot), en Deep Learning/NLP (fraud detection). ZONE 7 voor details!"},
  {match:q=>/reflectie|groei|transformatie|x-factor/i.test(q),reply:"Mijn grootste transformatie? Van student die lessen skipte naar een gedreven AI-professional. Discipline, focus en de ambitie om robots te bouwen die verschil maken. ZONE 8!"},
];

async function sendChat(){
  const t=CI.value.trim();if(!t)return;
  addUserMsg(t);CI.value='';setChatState('thinking');
  
  // Scope validation
  const scopeKeywords = ['luis','pxl','ai','informatica','tech','robot','python','ml','werk','studie','project','skill','ervaring','hannover','hackathon','sap','leer','traject','wie','wat','hoe'];
  const isOutOfScope = !scopeKeywords.some(k => t.toLowerCase().includes(k)) && t.length > 5;
  
  if(isOutOfScope) {
    const reply = "Sorry, mijn databank is strikt beperkt tot informatie over Luis en zijn tech-expertise. Stel gerust een vraag over zijn parcours of AI!";
    chats.push({role:'user',content:t});
    chats.push({role:'assistant',content:reply});
    setChatState('talking');
    addBotMsg(reply);
    if(ttsEnabled&&SYNTH){const u=new SpeechSynthesisUtterance(reply);u.lang='nl-NL';SYNTH.speak(u)}
    setTimeout(()=>setChatState('idle'),500);
    return;
  }

  chats.push({role:'user',content:t});

  // First try Ollama
  let reply=await askOllama(t,chats.slice(-10));
  // Fallback to local matching
  if(!reply){
    for(const fb of FALLBACKS){if(fb.match(t)){reply=fb.reply;break}}
    if(!reply)reply='Interessante vraag over mijn parcours! Ik kan je alles vertellen over mijn studies AI @ PXL, mijn skills in Python/ML, of mijn ervaringen bij de Hannover Messe en SAP AI Lab. Waar wil je meer over weten?';
  }

  chats.push({role:'assistant',content:reply});
  setChatState('talking');
  addBotMsg(reply);
  if(ttsEnabled&&SYNTH){SYNTH.cancel();const u=new SpeechSynthesisUtterance(reply);u.lang='nl-NL';u.rate=.9;u.pitch=.95;u.onstart=()=>setChatState('talking');u.onend=()=>setChatState('idle');SYNTH.speak(u);return}
  setTimeout(()=>setChatState('idle'),500);
}

BS.addEventListener('click',sendChat);
CI.addEventListener('keydown',e=>{if(e.key==='Enter')sendChat()});
BT.addEventListener('click',()=>{ttsEnabled=!ttsEnabled;BT.style.opacity=ttsEnabled?'1':'.4'});

let REC=null;
if('SpeechRecognition'in window||'webkitSpeechRecognition'in window){const SR=window.SpeechRecognition||window.webkitSpeechRecognition;REC=new SR();REC.lang='nl-NL';REC.interimResults=false;REC.onresult=e=>{CI.value=e.results[e.results.length-1][0].transcript;sendChat()};REC.onstart=()=>{BM.classList.add('is-active');setChatState('listening')};REC.onend=()=>{BM.classList.remove('is-active');if(chatState==='listening')setChatState('idle')}}
BM.addEventListener('click',()=>{if(REC){if(BM.classList.contains('is-active'))REC.stop();else REC.start()}});

// Chat robot animation
function chatAnimLoop(){
  if(!chatMode&&!chatAnimRunning)return;
  chatAnimRunning=true;
  CHAT_CTX.fillStyle='#020609';CHAT_CTX.fillRect(0,0,200,280);
  const cg=CHAT_CTX.createRadialGradient(100,260,0,100,260,100);cg.addColorStop(0,'rgba(0,255,231,.05)');cg.addColorStop(1,'rgba(0,255,231,0)');
  CHAT_CTX.fillStyle=cg;CHAT_CTX.beginPath();CHAT_CTX.arc(100,260,100,0,Math.PI*2);CHAT_CTX.fill();
  drawRobot(CHAT_CTX,100,140,3.8,false,chatState);
  if(chatState==='listening'){for(let i=0;i<3;i++){const h=4+Math.sin(Date.now()*.01+i*1.2)*8;CHAT_CTX.fillStyle='rgba(0,255,231,.8)';CHAT_CTX.fillRect(118+i*8,140-6*3.8-h/2,3,h)}}
  if(chatMode)requestAnimationFrame(chatAnimLoop);else chatAnimRunning=false;
}

/* ═══════ CV DOWNLOAD ═══════ */
document.getElementById('cv-download-btn').addEventListener('click',function(e){
  fetch(this.href,{method:'HEAD'}).then(r=>{if(!r.ok){e.preventDefault();alert('CV niet gevonden. Contacteer Luis via LinkedIn.')}}).catch(()=>{});
});
document.getElementById('lightbox').addEventListener('click',function(){this.classList.remove('visible')});

/* ═══════════════════════════════════════════════════════
   GAME LOOP
   ═══════════════════════════════════════════════════════ */
let lastTime=0;
function resize(){
  W=window.innerWidth;H=window.innerHeight;
  CANVAS.width=W;CANVAS.height=H;
  MINI_CANVAS.width=130;MINI_CANVAS.height=130;
  offsetX=W/2;offsetY=H/2-100;initRain()
}

function gameLoop(time){
  const dt=Math.min((time-lastTime)/1000,.05);lastTime=time;
  if(currentZoneIdx<0&&!chatMode){updateCamCenter();updateRobotMovement(dt);updateTraffic(dt)}
  cam.x+=(cam.targetX-cam.x)*.08;cam.y+=(cam.targetY-cam.y)*.08;cam.zoom+=(cam.targetZoom-cam.zoom)*.08;
  CTX.clearRect(0,0,W,H);drawGround();
  
  // Sort and draw all buildings
  const all=[...buildings,...cityDecoration].sort((a,b)=>(a.tx+a.ty)-(b.tx+b.ty));
  all.forEach(b=>drawBuilding(b));

  drawTraffic();drawSignalWaves();drawRobot(ctx);
  if(!window.matchMedia('(prefers-reduced-motion:reduce)').matches)drawRain();
  drawMinimap();requestAnimationFrame(gameLoop)
}

/* ═══════════════════════════════════════════════════════
   EVENTS
   ═══════════════════════════════════════════════════════ */
CANVAS.addEventListener('click',e=>{
  if(!bootComplete||document.getElementById('zone-popup').classList.contains('is-open')||chatMode)return;
  const sx=e.clientX,sy=e.clientY,bld=getBuildingAt(sx,sy);
  if(bld){const idx=buildings.indexOf(bld);if(idx>=0)moveRobotTo(bld.entranceTileX,bld.entranceTileY,ok=>{if(ok){cam.targetZoom=CFG.ZOOM_BUILDING;robot.isScanning=true;robot.scanTimer=0;setTimeout(()=>openZonePopup(idx),800)}});return}
  const st=screenToTile(sx,sy);
  const tx=Math.round(st.tx),ty=Math.round(st.ty);
  if(tx>=0&&tx<CFG.GRID&&ty>=0&&ty<CFG.GRID&&walkableGrid[ty]?.[tx]){signalWaves.push({x:sx,y:sy,r:2,maxR:20,life:1});cam.targetZoom=CFG.ZOOM_DEFAULT;moveRobotTo(tx,ty)}
});

CANVAS.addEventListener('mousemove',e=>{
  const bld=getBuildingAt(e.clientX,e.clientY);
  hoveredBuilding=bld;buildings.forEach(b=>b.hovered=b===bld);
  const t=document.getElementById('tooltip');
  if(bld&&!document.getElementById('zone-popup').classList.contains('is-open')&&!chatMode){t.textContent=`[ CLICK TO ENTER ] ${bld.id}`;t.style.left=(e.clientX+16)+'px';t.style.top=(e.clientY-30)+'px';t.classList.add('visible')}else t.classList.remove('visible')
});

CANVAS.addEventListener('mousedown',e=>{if(!chatMode){dragging=true;draggingCam={x:cam.targetX,y:cam.targetY,startX:e.clientX,startY:e.clientY}}});
window.addEventListener('mousemove',e=>{if(dragging&&!chatMode){cam.targetX=draggingCam.x+(e.clientX-draggingCam.startX)*1.5;cam.targetY=draggingCam.y+(e.clientY-draggingCam.startY)*1.5}});
window.addEventListener('mouseup',()=>{dragging=false});
CANVAS.addEventListener('wheel',e=>{e.preventDefault();if(!chatMode)cam.targetZoom=Math.max(CFG.ZOOM_MIN,Math.min(CFG.ZOOM_MAX,cam.targetZoom-e.deltaY*.001))},{passive:false});

document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){if(document.getElementById('zone-popup').classList.contains('is-open'))closeZonePopup();else if(chatMode)closeChat()}
  if(e.key==='Tab'&&!document.getElementById('zone-popup').classList.contains('is-open')&&!chatMode){
    e.preventDefault();const uv=buildings.filter(b=>!visitedZones.has(b.id));if(!uv.length)return;const ci=hoveredBuilding?uv.indexOf(hoveredBuilding):-1,next=uv[(ci+1)%uv.length];if(next){const np=tileToScreen(next.tx,next.ty);cam.targetX=W/2-np.x;cam.targetY=W/2-np.y;hoveredBuilding=next;buildings.forEach(b=>b.hovered=b===next)}
  }
  if(e.key==='Enter'&&hoveredBuilding&&!document.getElementById('zone-popup').classList.contains('is-open')&&!chatMode){const idx=buildings.indexOf(hoveredBuilding);if(idx>=0)moveRobotTo(hoveredBuilding.entranceTileX,hoveredBuilding.entranceTileY,ok=>{if(ok){cam.targetZoom=CFG.ZOOM_BUILDING;robot.isScanning=true;robot.scanTimer=0;setTimeout(()=>openZonePopup(idx),800)}})}
  if(e.key==='ArrowLeft'&&document.getElementById('zone-popup').classList.contains('is-open'))openZonePopup(currentZoneIdx-1);
  if(e.key==='ArrowRight'&&document.getElementById('zone-popup').classList.contains('is-open'))openZonePopup(currentZoneIdx+1);
});

let tsX,tsY;
CANVAS.addEventListener('touchstart',e=>{const t=e.touches[0];tsX=t.clientX;tsY=t.clientY});
CANVAS.addEventListener('touchmove',e=>{e.preventDefault();if(!chatMode&&e.touches.length===1&&!document.getElementById('zone-popup').classList.contains('is-open')){const dx=e.touches[0].clientX-tsX,dy=e.touches[0].clientY-tsY;if(Math.abs(dx)>10||Math.abs(dy)>10){cam.targetX+=dx*1.5;cam.targetY+=dy*1.5;tsX=e.touches[0].clientX;tsY=e.touches[0].clientY}}},{passive:false});
CANVAS.addEventListener('touchend',e=>{if(e.changedTouches.length===1){const t=e.changedTouches[0];if(Math.abs(t.clientX-tsX)<8&&Math.abs(t.clientY-tsY)<8)CANVAS.dispatchEvent(new MouseEvent('click',{clientX:t.clientX,clientY:t.clientY}))}});

window.addEventListener('resize',resize);

/* ═══════ INIT ═══════ */
resize();createBuildings();initGrid();initCityDecoration();initTraffic();requestAnimationFrame(gameLoop);
updateCamCenter();cam.x=cam.targetX;cam.y=cam.targetY;
if(window.innerWidth<768){cam.targetZoom=.85;cam.zoom=.85}
console.log('🤖 v4.0 Portfolio — Vite + 40×40 + Ollama + Gallery');
