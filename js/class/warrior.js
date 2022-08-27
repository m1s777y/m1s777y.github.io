let coef = 0;
let spec = "";
let versvalue = 0;
let apvalue = 0;
let levelvalue = 0;
function slam() 
{
  let rtrn = 0.35 * apvalue * (1+versvalue);
  if(levelvalue >= 10)
  {
    rtrn*= coef;
  }
  if(spec == "warrior-arms")
  {
    rtrn *=1.2;
    if(levelvalue >= 20)
    rtrn *= 1.6;
    if(levelvalue >= 48)
    rtrn *= 1.5;
  }
  document.getElementById("slam").value = rtrn.toFixed(2);
}
function charge(){
  if(levelvalue >= 2)
  {
    let rtrn = 0.11466 * apvalue * (1+versvalue);
    if(levelvalue >= 10)
    {
      rtrn *= coef;
    }
    document.getElementById("charge").value = rtrn.toFixed(2);
  }
  else
  {
    document.getElementById("charge").value = 0.00.toFixed(2);
  }
}
function shieldslam()
{
  if(levelvalue >= 3)
  {
  let rtrn = 0.851 * apvalue * (1+versvalue);
  if(levelvalue >= 10)
  {
    rtrn*= coef;
  }
  if(spec == "warrior-protection")
  {
    if(levelvalue >= 44)
    rtrn*=1.2;
  }
  document.getElementById("shield slam").value = rtrn.toFixed(2);
  }
  else
  {
    document.getElementById("shield slam").value = 0.00.toFixed(2);
  }
}
function victoryrush()
{
  if(levelvalue >= 5)
  {
    let rtrn = 0.4 * apvalue * (1+versvalue);
    if(levelvalue >= 10)
      rtrn *= coef;
    document.getElementById("victory rush").value = rtrn.toFixed(2);
  }
  else
  {
    document.getElementById("victory rush").value = 0.00.toFixed(2);
  }
  
}
function whirlwind()
{
  if (levelvalue >= 9)
  {
    let rtrn = 0.089 * apvalue * (1+versvalue)*3;
    if (spec == "warrior-fury")
    {
      let OHDPS = parseInt(document.getElementById("OHDPS").value*3);
      rtrn += 3*(0.083*(apvalue - parseInt(document.getElementById("MHDPS").value*6) + OHDPS)*(1+versvalue));
    }
    else
    {
      rtrn *= 2;
    }
    if(levelvalue >=10)
    {
      rtrn *= coef;
    }
    document.getElementById("whirlwind").value = rtrn.toFixed(2);
  }
  else
  {
    document.getElementById("whirlwind").value = 0.00.toFixed(2);
  }
}
function hamstring()
{
  if(levelvalue >= 4)
  {
    let rtrn = 0.15*apvalue*(1+versvalue);
    if(levelvalue >=10)
    {
      rtrn *= coef;
    }
    document.getElementById("hamstring").value = rtrn.toFixed(2);
  }
  else
  {
    document.getElementById("hamstring").value = 0.00.toFixed(2);
  }
}
function execute(){
  if(levelvalue>=10)
  {
    let rtrn = 0;
    if(spec == "warrior-fury")
    {
      rtrn = 1.128 * apvalue * (1+versvalue);
      let OHDPS = parseFloat(document.getElementById("OHDPS").value)*3;
      rtrn += (1.27 *(apvalue - parseFloat(document.getElementById("MHDPS").value)*6 + OHDPS)*(1+versvalue));
      rtrn *= coef;
    }
    else
    {
      rtrn = 1.7 * apvalue * (1+versvalue) * coef;
    }
    document.getElementById("execute").value = 2*rtrn.toFixed(2);
  }
  else
  {
    document.getElementById("execute").value = 0.00.toFixed(2);
  }
}
function heroicthrow()
{
  let rtrn = 0;
  if(levelvalue >= 24)
  {
    rtrn = 0.2*apvalue*(1+versvalue)*coef;
  }
  else
  {
    rtrn = 0;
  }
  document.getElementById("heroic throw").value = rtrn.toFixed(2);
}
function heroicleap()
{
  let rtrn = 0;
  if(levelvalue >=33)
  {
    rtrn = 0.102211 * apvalue *(1+versvalue)*coef;
  }
  else
  {
    rtrn = 0.00;
  }
  document.getElementById("heroic leap").value = rtrn.toFixed(2);
}
function shatteringthrow()
{
  let rtrn = 0;
  if(levelvalue >=41)
  {
    rtrn = 1.0 * apvalue * (1+versvalue) * coef;
  }
  else
  {
    rtrn = 0.00;
  }
  document.getElementById("shattering throw").value = rtrn.toFixed(2);
}
function mortalstrike()
{
  let rtrn = 0;
  if(levelvalue >=10)
  {
    rtrn = 1.743 * apvalue * coef * (1+versvalue)
  }
  if(levelvalue >=44)
  rtrn*=1.2;
  document.getElementById("mortal strike").value = rtrn.toFixed(2);
}
function masteryarms()
{
  let rtrn = 0;
  if(levelvalue >=10)
  {
    rtrn = 0.15 * apvalue * coef * (1+versvalue) * (1+parseFloat(document.getElementById("MasteryResult").value)/100.0)* (1+parseFloat(document.getElementById("MasteryResult").value)/100.0);
    rtrn = rtrn*(12/(3/(1 + parseFloat(document.getElementById("HasteResult").value)/100.0)));
  }
  document.getElementById("mastery_arms").value = rtrn.toFixed(2);
}
function overpower()
{
  let rtrn = 0;
  if(levelvalue >=12)
  {
    rtrn = 1.107 * apvalue * coef * (1+versvalue);
  }
  document.getElementById("overpower").value = rtrn.toFixed(2);
}
function colossussmash()
{
  let rtrn = 0;
  if (levelvalue >=19)
  {
    rtrn = 1.815 * apvalue * (1+versvalue) * coef;
  }
  document.getElementById("colossus smash").value = rtrn.toFixed(2);
}
function bladestorm()
{
  let rtrn = 0;
  if(levelvalue >= 38)
  {
    rtrn = 0.5 * apvalue * (1+versvalue) * coef*7*1.4;
  }
  document.getElementById("bladestorm").value = rtrn.toFixed(2);
}
function calculatespells()
{
  levelvalue = parseInt(document.getElementById("Level").value);
  spec = document.getElementById("spec").value;
  versvalue = parseFloat(document.getElementById("VersatilityResult").value)/100.0;
  apvalue = parseInt(document.getElementById("AttackPower").value);
  if(parseFloat(document.getElementById("MHDPS").value) != 0)
  {
    apvalue +=parseInt(document.getElementById("MHDPS").value*6);
  }
  else
  {
    apvalue += 3;
  }
  if(spec == "warrior-protection")
  {

  }
  if(spec != "warrior-fury")
  {
    document.getElementById("MHText").innerHTML = "MH";
    document.getElementById("OHDPS").style.display = "none";
  }
  else
  {
    document.getElementById("MHText").innerHTML = "MH/OH";
    document.getElementById("OHDPS").style.display = "";
  }
  switch(spec){
    case "warrior-arms":
      coef = 1.13;
      mortalstrike();
      masteryarms();
      overpower();
      colossussmash();
      bladestorm();
      break;
    case "warrior-fury":
      coef = 1.29;
      break;
    case "warrior-protection":
      coef = 1.166;
      break;
  }
  slam();
  charge();
  shieldslam();
  victoryrush();
  whirlwind();
  hamstring();
  execute();
  heroicthrow();
  heroicleap();
  shatteringthrow();
}
