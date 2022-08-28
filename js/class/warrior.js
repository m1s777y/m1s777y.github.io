let coef = 0;
let spec = "";
let versvalue = 0;
let apvalue = 0;
let levelvalue = 0;
//#region basespec
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
  let rtrn = 0;
  if (levelvalue >= 9)
  {
    if (spec == "warrior-fury")
    {
      rtrn = 0.083 * apvalue * (1+versvalue)*3;
      let OHDPS = parseFloat(document.getElementById("OHDPS").value*6);
      rtrn += 3*(0.089*(apvalue - parseFloat(document.getElementById("MHDPS").value*6) + OHDPS)*(1+versvalue))/2.0;
      rtrn *= coef;
    }
    else
    {
      rtrn = 0.182 * apvalue * (1+versvalue)*3 * coef;
    }
    // if(levelvalue >=10)
    // {
    //   rtrn *= coef;
    // }
  }
    document.getElementById("whirlwind").value = rtrn.toFixed(2);
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
      let OHDPS = parseInt(document.getElementById("OHDPS").value)*6;
      rtrn += (1.27 *(apvalue - parseInt(document.getElementById("MHDPS").value)*6 + OHDPS)*(1+versvalue))/2.0;
      rtrn *= coef;
    }
    else
    {
      rtrn = 1.7 * apvalue * (1+versvalue) * coef*2;
    }
    document.getElementById("execute").value = rtrn.toFixed(2);
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
//#endregion
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
function bloodthirst()
{
  let rtrn = 0;
  if(levelvalue >=10)
  {
    rtrn = 0.65 * apvalue * coef * (1+versvalue);
    if(levelvalue>=48)
      rtrn *=1.3;
  }
  document.getElementById("bloodthirst").value = rtrn.toFixed(2);
}
function ragingblow()
{
  let rtrn = 0;
  if(levelvalue >=12)
  {
    rtrn = 0.611 * apvalue *  (1+versvalue);
    let OHDPS = parseInt(document.getElementById("OHDPS").value*6);
    rtrn += (0.611 *(apvalue - parseInt(document.getElementById("MHDPS").value*6) + OHDPS)*(1+versvalue))/2.0;
    rtrn *= coef;
  }
  document.getElementById("raging blow").value = rtrn.toFixed(2);
}
function rampage()
{
  let rtrn = 0;
  if(levelvalue >=19)
  {
    rtrn = 0.752 * apvalue * (1+versvalue);
    let OHDPS = parseInt(document.getElementById("OHDPS").value*6);
    rtrn += (1.316 * (apvalue - parseInt(document.getElementById("MHDPS").value*6) + OHDPS)*(1+versvalue))/2.0;
    rtrn *= coef;
    if(levelvalue >=44)
    {
      rtrn *=1.2;
    }
  }
  document.getElementById("rampage").value = rtrn.toFixed(2);
}
function revenge()
{
  let rtrn = 0;
  if (levelvalue >=12)
  {
    rtrn = 0.63 * apvalue * (1+versvalue) * coef;
  }
  document.getElementById("revenge").value = rtrn.toFixed(2);
}
function devastate()
{
  let rtrn = 0;
  if(levelvalue >= 14)
  {
    rtrn = 0.525 * apvalue * (1+versvalue) * coef;
  }
  document.getElementById("devastate").value = rtrn.toFixed(2);
}
function thunderclap()
{
  let rtrn = 0;
  if (levelvalue >= 19)
  {
    rtrn = 0.462 * apvalue * (1+versvalue) * coef;
  }
  document.getElementById("thunder clap").value = rtrn.toFixed(2);
}
function shockwave()
{
  let rtrn = 0;
  if (levelvalue >=21)
  {
    rtrn = 0.082 * apvalue * (1+versvalue) * coef;
  }
  document.getElementById("shockwave").value = rtrn.toFixed(2);
}
function deepwounds()
{
  let rtrn = 0;
  if (levelvalue >=42)
  {
    rtrn = 0.147 * apvalue * (1+versvalue) * coef;
    rtrn *= 15/(3 / (1 + parseFloat(document.getElementById("HasteResult").value)/100.0));
  }
  document.getElementById("deepwounds").value = rtrn.toFixed(2);
}
function calculatespells()
{
  levelvalue = parseInt(document.getElementById("Level").value);
  spec = document.getElementById("spec").value;
  versvalue = parseFloat(document.getElementById("VersatilityResult").value)/100.0;
  apvalue = parseFloat(document.getElementById("AttackPower").value);
  if(parseFloat(document.getElementById("MHDPS").value) != 0)
  {
    apvalue +=parseFloat(document.getElementById("MHDPS").value*6);
  }
  else
  {
    apvalue += 3;
  }
  if(spec == "warrior-protection")
  {
    apvalue *= (1+parseFloat(document.getElementById("MasteryResult").value)/150.0);
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
      bloodthirst();
      ragingblow();
      execute();
      whirlwind();
      rampage();
      break;
    case "warrior-protection":
      coef = 1.166;
      revenge();
      devastate();
      thunderclap();
      shockwave();
      deepwounds();
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
