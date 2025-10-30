function handleFormSubmit(ele) {
    // evita envios duplicados
    if (ele.__submitting) return false;
    ele.__submitting = true;

    var submitButton = ele.querySelector('input[type=submit]');
    var spinner = document.createElement('span');
    spinner.setAttribute('class', 'loader');
    if (submitButton) {
        submitButton.setAttribute('disabled', true);
        submitButton.style.cursor = 'wait';
        submitButton.parentNode.appendChild(spinner);
    }

    // garante que a pontuação esteja no hidden antes do envio
    try {
        var hidden = document.getElementById('fe474');
        if (hidden) hidden.value = typeof maturidadePontos !== 'undefined' ? maturidadePontos : '';
    } catch (e) { console.error(e); }

    // envia via fetch (mode no-cors para evitar erro CORS) e mostra o card após o envio
    try {
        var action = ele.action || window.location.href;
        var fd = new FormData(ele);
        fetch(action, { method: 'POST', body: fd, mode: 'no-cors' })
            .then(function () {
                mostrarResultado(maturidadeNivel, maturidadeDescricao, maturidadePontos);
            })
            .catch(function () {
                // mesmo em erro, mostrar o card (modo resiliente)
                mostrarResultado(maturidadeNivel, maturidadeDescricao, maturidadePontos);
            })
            .finally(function () {
                if (submitButton) {
                    submitButton.disabled = false;
                    if (spinner.parentNode) spinner.parentNode.removeChild(spinner);
                    submitButton.style.cursor = '';
                }
                ele.__submitting = false;
            });
    } catch (e) {
        console.error(e);
        mostrarResultado(maturidadeNivel, maturidadeDescricao, maturidadePontos);
        if (submitButton) {
            submitButton.disabled = false;
            if (spinner.parentNode) spinner.parentNode.removeChild(spinner);
            submitButton.style.cursor = '';
        }
        ele.__submitting = false;
    }

    // prevenir comportamento padrão (navegação)
    return false;
}
function resetSubmitButton(e) {
    var submitButtons = e.target.form.getElementsByClassName('submit-button');
    for (var i = 0; i < submitButtons.length; i++) {
        submitButtons[i].disabled = false;
    }
}
function addChangeHandler(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('change', resetSubmitButton);
    }
}

var form = document.getElementById('form58');
addChangeHandler(form.getElementsByTagName('input'));
addChangeHandler(form.getElementsByTagName('select'));
addChangeHandler(form.getElementsByTagName('textarea'));
var nodes = document.querySelectorAll('#form58 input[data-subscription]');
if (nodes) {
    for (var i = 0, len = nodes.length; i < len; i++) {
        var status = nodes[i].dataset ? nodes[i].dataset.subscription : nodes[i].getAttribute('data-subscription');
        if (status === 'true') { nodes[i].checked = true; }
    }
};
var nodes = document.querySelectorAll('#form58 select[data-value]');
if (nodes) {
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        var selectedValue = node.dataset ? node.dataset.value : node.getAttribute('data-value');
        if (selectedValue) {
            for (var j = 0; j < node.options.length; j++) {
                if (node.options[j].value === selectedValue) {
                    node.options[j].selected = 'selected';
                    break;
                }
            }
        }
    }
}
this.getParentElement = function (list) { return list[list.length - 1].parentElement };

var dom0 = document.querySelector('#form58 #fe466');
var fe466 = new LiveValidation(dom0, { validMessage: "", onlyOnBlur: false, wait: 300, isPhoneField: false });
fe466.add(Validate.Custom, { against: function (v) { return !v.match(/(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i); }, failureMessage: "Value must not contain any URL's" });
fe466.add(Validate.Custom, { against: function (v) { return !v.match(/(<([^>]+)>)/ig); }, failureMessage: "Value must not contain any HTML" });
fe466.add(Validate.Presence, { failureMessage: "Insira um nome." });
fe466.add(Validate.Length, { tooShortMessage: "Invalid length for field value", tooLongMessage: "Invalid length for field value", minimum: 0, maximum: 35 });

var dom1 = document.querySelector('#form58 #fe467');
var fe467 = new LiveValidation(dom1, { validMessage: "", onlyOnBlur: false, wait: 300, isPhoneField: false });
fe467.add(Validate.Custom, { against: function (v) { return !v.match(/(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i); }, failureMessage: "Value must not contain any URL's" });
fe467.add(Validate.Custom, { against: function (v) { return !v.match(/(<([^>]+)>)/ig); }, failureMessage: "Value must not contain any HTML" });
fe467.add(Validate.Length, { tooShortMessage: "Invalid length for field value", tooLongMessage: "Invalid length for field value", minimum: 0, maximum: 35 });
fe467.add(Validate.Presence, { failureMessage: "Insira um sobrenome." });

var dom2 = document.querySelector('#form58 #fe468');
var fe468 = new LiveValidation(dom2, { validMessage: "", onlyOnBlur: false, wait: 300, isPhoneField: false });
fe468.add(Validate.Presence, { failureMessage: "Insira um endereço de email como exemplo@meusite.com." });
fe468.add(Validate.Format, { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, failureMessage: "Insira um email válido." });

var dom3 = document.querySelector('#form58 #fe469');
var fe469 = new LiveValidation(dom3, { validMessage: "", onlyOnBlur: false, wait: 300, isPhoneField: false });
fe469.add(Validate.Presence, { failureMessage: "Insira um número." });

var dom4 = document.querySelector('#form58 #fe470');
var fe470 = new LiveValidation(dom4, { validMessage: "", onlyOnBlur: false, wait: 300, isPhoneField: true });
fe470.add(Validate.Presence, { failureMessage: "Insira o número de telefone." });

var dom5 = document.querySelector('#form58 #fe472');
var fe472 = new LiveValidation(dom5, { validMessage: "", onlyOnBlur: false, wait: 300, isPhoneField: false });
fe472.add(Validate.Presence, { failureMessage: "Escolha uma opção." });

var dom6 = document.querySelector('#form58 #fe473');
var fe473 = new LiveValidation(dom6, { validMessage: "", onlyOnBlur: false, wait: 300, isPhoneField: false });
fe473.add(Validate.Acceptance, { failureMessage: "Marque a caixa para continuar." });

var currentStep = 0;
var steps = document.getElementsByClassName('step');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
var submitBtn = document.getElementById('fe471');

var maturidadePontos = 0;

function updateNextBtnState() {
    try {
        if (!nextBtn) return;

        if (currentStep === 0) {
            var v0 = dom0 && dom0.value ? dom0.value.trim() : "";
            var v1 = dom1 && dom1.value ? dom1.value.trim() : "";
            var v2 = dom2 && dom2.value ? dom2.value.trim() : "";
            var v3 = dom3 && dom3.value ? dom3.value.trim() : "";
            var v4 = dom4 && dom4.value ? dom4.value.trim() : "";
            var v5 = dom5 && dom5.value ? dom5.value.trim() : "";
            var checkboxChecked = dom6 && dom6.checked;
            nextBtn.disabled = !v0 || !v1 || !v2 || !v3 || !v4 || !v5 || !checkboxChecked;
            return;
        }

        var step = steps[currentStep];
        if (!step) { nextBtn.disabled = true; return; }
        var grupos = step.querySelectorAll('div[id*="q"]');
        var allChecked = true;
        grupos.forEach(function (grupo) {
            var radios = grupo.querySelectorAll('input[type="radio"]');
            var algum = Array.prototype.slice.call(radios).some(function (r) { return r.checked; });
            if (!algum) allChecked = false;
        });
        nextBtn.disabled = !allChecked;
    } catch (e) {
        console.error(e);
    }
}

[dom0, dom1, dom2, dom3, dom4, dom5, dom6].forEach(function (el) {
    if (!el) return;
    el.addEventListener('input', updateNextBtnState);
    el.addEventListener('change', updateNextBtnState);
    el.addEventListener('keyup', updateNextBtnState);
});

document.querySelectorAll('#form58 input[type="radio"]').forEach(function (r) {
    r.addEventListener('change', updateNextBtnState);
});

setTimeout(updateNextBtnState, 0);

function showStep(n) {
    for (var i = 0; i < steps.length; i++) { steps[i].style.display = i === n ? 'block' : 'none'; }
    prevBtn.disabled = n === 0;

    if (n === steps.length - 1) {
        nextBtn.textContent = "Enviar";
        nextBtn.onclick = function () {
            if (!validarStep()) return;
            calcularMaturidade();
            if (form.requestSubmit) form.requestSubmit();
            else if (submitBtn) submitBtn.click();
        };
    } else {
        nextBtn.textContent = "Próximo";
        nextBtn.onclick = function () { nextPrev(1); };
    }

    updateNextBtnState();
}

function nextPrev(n) { currentStep += n; if (currentStep < 0) currentStep = 0; if (currentStep >= steps.length) currentStep = steps.length - 1; showStep(currentStep); }

showStep(currentStep);

function validarStep() {
    const stepAtual = steps[currentStep];
    const grupos = stepAtual.querySelectorAll('div[id*="q"]');
    let valido = true;

    grupos.forEach((grupo) => {
        const radios = grupo.querySelectorAll('input[type="radio"]');
        const erroMsg = grupo.querySelector('.radio-validation-message');
        const algumMarcado = Array.from(radios).some(r => r.checked);

        if (!algumMarcado) {
            erroMsg.style.display = 'block';
            valido = false;
        } else {
            erroMsg.style.display = 'none';
        }
    });

    return valido;
}

function addRadioChangeListeners() {
    const allRadios = document.querySelectorAll('#form58 input[type="radio"]');
    allRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            const grupo = radio.closest('div[id*="q"]');
            if (grupo) {
                const erroMsg = grupo.querySelector('.radio-validation-message');
                if (erroMsg) erroMsg.style.display = 'none';
            }
        });
    });
}

addRadioChangeListeners();

function calcularMaturidade() {
    const respostas = document.querySelectorAll('input[type="radio"]:checked');
    let pontos = 0;

    respostas.forEach((r) => {
        if (r.value === "Sim") pontos += 2;
        else if (r.value === "Em andamento") pontos += 1;
    });

    maturidadePontos = pontos;

    try {
        var hiddenFieldFe474 = document.getElementById('fe474');
        if (hiddenFieldFe474) hiddenFieldFe474.value = pontos;
    } catch (e) { console.error(e); }

    let nivel = "";
    let descricao = "";

    if (pontos <= 8) {
        nivel = "Nível Iniciante";
        descricao = "Experimentação";
    } else if (pontos <= 16) {
        nivel = "Nível Intermediário";
        descricao = "Expansão";
    } else {
        nivel = "Nível Avançado";
        descricao = "Transformação";
    }

    maturidadeNivel = nivel;
    maturidadeDescricao = descricao;

    return { pontos, nivel, descricao };
}

function mostrarResultado(nivel, descricao, pontos) {
    let container = document.querySelector(".result-card");
    if (!container) {
        container = document.createElement("div");
        container.className = "result-card";
        container.style.marginTop = "24px";
        container.style.padding = "32px";
        container.style.borderRadius = "12px";
        container.style.background = "#fff";
        container.style.boxShadow = "0 6px 20px rgba(0,0,0,0.06)";
        container.style.maxWidth = "800px";
        container.style.margin = "24px auto";
        const formNode = document.querySelector("#form58");
        formNode.parentNode.insertBefore(container, formNode.nextSibling);
    }

    let borderColor, textColor, recomendacoes, desc, question, img, imgHeight, imgWidth;

    if (nivel === "Nível Iniciante") {
        borderColor = "#E74C3C";
        textColor = "#E74C3C";
        desc = "Indica que sua instituição ou orgão ainda está nos estágios iniciais de adoção da computação em nuvem.";
        question = "Como evoluir para o nível de maturidade intermediário ?";
        imgWidth = "130px";
        imgHeight = "100px";
        img = "https://images.serpro.gov.br/EloquaImages/clients/ServicoFederalDeProcessamentoDeDadosSerp/%7Bf967f278-9bef-48c0-9dc9-4b25bc1bcda5%7D_iniciante.png";
        recomendacoes = `
            <li>Definir uma estratégia inicial de nuvem, estabelecendo objetivos claros</li>
            <li>Mapear workloads candidatos para a nuvem, priorizando aqueles que podem gerar valor imediato</li>
            <li>Treinar equipes técnicas para reduzir barreiras e aumentar o conhecimento sobre nuvem</li>
            <li>Começar a criar uma governança mínima, estabelecendo padrões básicos de segurança e conformidade</li>
            <li>Avaliar e escolher, com o apoio do Serpro, qual o provedor de nuvem mais alinhado às necessidades da organização, podendo ser nuvens públicas e/ou a Nuvem de Governo do Serpro.</li>`;
    } else if (nivel === "Nível Intermediário") {
        borderColor = "#F1C40F";
        textColor = "#F1C40F";
        desc = "Indica que sua instituição ou órgão já começa a crescer na adoção de nuvem e os processos começam a ser padronizados, mas ainda há desafios na automação. A segurança e compliance estão sendo estruturados, mas não são totalmente automatizados. Avalie uma integração entre TI e negócio.";
        question = "Como evoluir para o nível de maturidade avançado?";
        imgWidth = "130px";
        imgHeight = "100px";
        img = "https://images.serpro.gov.br/EloquaImages/clients/ServicoFederalDeProcessamentoDeDadosSerp/%7B7213b872-8f91-460c-bc7f-85a59b339fc7%7D_intermedi%C3%A1rio.png";
        recomendacoes = `
            <li>Criar um framework de governança e melhores práticas, garantindo que diferentes equipes sigam padrões comuns.</li>
            <li>Estabelecer uma estrutura de FinOps para gerenciar custos e evitar desperdícios.</li>
            <li>Desenvolver um plano de migração mais estruturado, priorizando workloads estratégicos.</li>
            <li>Padronizar ferramentas de segurança e conformidade, definindo políticas claras.</li>
            <li>Implementar um centro de excelência em cloud para disseminar o conhecimento.</li>`;
    } else {
        borderColor = "#2ECC71";
        textColor = "#2ECC71";
        desc = "Indica que sua instituição ou órgão faz uso consolidado da nuvem, mas ainda há espaço para inovação. Automação está presente e já percebe o valor da nuvem, tendo condições de oferecer ainda mais serviços digitais ao cidadão.";
        question = "Como evoluir para o Nível Inovação?";
        imgWidth = "130px";
        imgHeight = "110px";
        img = "https://images.serpro.gov.br/EloquaImages/clients/ServicoFederalDeProcessamentoDeDadosSerp/%7B0ac19412-f1f1-403e-a9b8-21f8f8cc0f01%7D_avan%C3%A7ado.png";
        recomendacoes = `
            <li>Automatizar a governança de cloud, implementando políticas de segurança e conformidade como código (Policy as Code).​</li>
            <li>Adotar infraestrutura como código (IaC) para provisionamento e gestão eficiente de recursos.</li>
            <li>Integrar a nuvem ao planejamento estratégico da empresa, garantindo que TI e negócio estejam alinhados.</li>
            <li>Criar KPIs e métricas de performance para medir o impacto da adoção da nuvem.</li>
            <li>Implementar uma cultura DevOps e FinOps madura, com ciclos ágeis e responsivos.</li>
            <li>Ampliar o uso de ferramentas de observabilidade e monitoramento, garantindo alta disponibilidade e desempenho.</li>
            <li>Explorar tecnologias emergentes, como serverless, containers, edge computing e multicloud.</li>
            <li>Adoção plena de segurança Zero Trust, garantindo proteção de ponta a ponta.</li>`;
    }

    container.style.borderLeft = `6px solid ${borderColor}`;

    container.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom: 4vh">
            <div style="display:flex; flex-direction:column;">
                <h3 style="color:#333; margin:0 0 8px 0; font-size:24px;">Resultado da Avaliação</h3>
                <h4 style="color:${textColor}; margin:0 0 0px 0; font-size:28px; font-weight:600;">${nivel}</h4>
                <h4 style="color:#333; margin:0 0 8px 0; font-size:24px;">${descricao}</h4>
            </div>
            <div>
                <img src="${img}" alt="Serpro Logo" style="width:${imgWidth}; height:${imgHeight};">
            </div>
        </div>
        <div>
          <h4 style="margin:0; font-size:16px; color:#555; text-align: center; margin-bottom:1vh;">${question}</h4>
          <p style="margin:0; font-size:16px; color:#555; text-align: center;">${desc}</p>
        </div>

        <div style="margin:24px 0; padding:24px; background:#f8f9fa; border-radius:8px;">
            <h5 style="margin:0 0 16px 0; font-size:18px; color:#333;">Como evoluir?</h5>
            <ul style="padding-left:20px; margin:0; color:#444; line-height:1.6;">
                ${recomendacoes}
            </ul>
        </div>

        <div style="margin-top:24px; display:flex; gap:12px; justify-content:center;">
            <a href="https://loja.serpro.gov.br/_files/ugd/d3046d_91a604d5906d47fc8ac9877b74fc5f26.pdf" 
               target="_blank"
               style="text-decoration:none; padding:12px 24px; background:#4a39a3; color:white; border-radius:8px; font-weight:600;">
               Baixe aqui: 10 passos de sucesso para a nuvem
            </a>
            <button type="button" 
                    id="resultNovoBtn" 
                    style="padding:12px 24px; border-radius:8px; border:1px solid #4a39a3; background:#fff; color:#4a39a3; cursor:pointer; font-weight:600;">
                Novo Formulário
            </button>
        </div>
    `;

    try {
        if (nextBtn) nextBtn.style.display = "none";
        if (prevBtn) prevBtn.style.display = "none";
        document.querySelector("#form58").style.display = "none";
    } catch (e) { console.error(e); }

    var novoBtn = document.getElementById('resultNovoBtn');
    if (novoBtn) novoBtn.addEventListener('click', resetFormForNewSubmission);
}

function resetFormForNewSubmission() {
    const card = document.querySelector('.result-card');
    if (card) card.parentNode.removeChild(card);

    try {
        form.reset();
    } catch (e) { console.error(e); }

    const hidden = document.getElementById('fe474');
    if (hidden) hidden.value = '';

    document.querySelectorAll('.radio-validation-message').forEach(function (el) {
        el.style.display = 'none';
    });

    maturidadePontos = 0;
    maturidadeNivel = '';
    maturidadeDescricao = '';

    try {
        const formNode = document.querySelector('#form58');
        if (formNode) formNode.style.display = 'flex';
        if (nextBtn) { nextBtn.style.display = ''; nextBtn.disabled = true; }
        if (prevBtn) { prevBtn.style.display = ''; prevBtn.disabled = true; }
    } catch (e) { console.error(e); }

    currentStep = 0;
    showStep(0);
    updateNextBtnState();

    const f = document.querySelector('#form58');
    if (f && f.scrollIntoView) f.scrollIntoView({ behavior: 'smooth' });
}
