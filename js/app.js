// ****************** Variables ******************
const d = document;
const $buttons = d.querySelectorAll(".card-button");
const $basic_price = d.getElementById("basic-price");
const $pro_price = d.getElementById("pro-price");
const $companies_price = d.getElementById("companies-price");
const $inputs = d.getElementsByName("plan");
const $cards_select = d.getElementById("cards-select");

let isAnnual = undefined;

const basicPlan = '$50<span class="card-currency">USD</span><span class="card-time">/mensual</span>';
const proPlan = '$75<span class="card-currency">USD</span><span class="card-time">/mensual</span>';
const companiesPlan = '$99<span class="card-currency">USD</span><span class="card-time">/mensual</span>';

const basicPlanAnnual = '$360<span class="card-currency">USD</span><span class="card-time">/anual</span>';
const proPlanAnnual = '$540<span class="card-currency">USD</span><span class="card-time">/anual</span>';
const companiesPlanAnnual = '$713<span class="card-currency">USD</span><span class="card-time">/anual</span>';

// ****************** Funciones ******************
const change = (isAnnual)=>{
  if(isAnnual){
    $basic_price.innerHTML = basicPlanAnnual;
    $pro_price.innerHTML = proPlanAnnual;
    $companies_price.innerHTML = companiesPlanAnnual;
    $cards_select.classList.toggle("is-annual");
  }else if(isAnnual === false){
    $basic_price.innerHTML = basicPlan;
    $pro_price.innerHTML = proPlan;
    $companies_price.innerHTML = companiesPlan;
    $cards_select.classList.toggle("is-annual");
  }
}


// ****************** Eventos ******************
d.addEventListener("DOMContentLoaded", ()=>{
  change(isAnnual);
  $basic_price.innerHTML = basicPlan;
  $pro_price.innerHTML = proPlan;
  $companies_price.innerHTML = companiesPlan;
});

$buttons.forEach((button)=>{
  button.addEventListener("click", (e)=>{
    e.preventDefault();
  })
});

$inputs.forEach((input)=>{
  input.addEventListener("change", ()=>{
    (input.value === 'annual') ? isAnnual = true : isAnnual = false;
    change(isAnnual);
  })
})