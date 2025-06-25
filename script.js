document.addEventListener('DOMContentLoaded', () => {


    const translations = {
        tr: {
            page_title: "LLM Yaşam Döngüsü Maliyet Hesaplayıcısı",
            main_title: "LLM Yaşam Döngüsü: Maliyet ve Ölçek Hesaplayıcısı",
            intro_text: "Bu araç, bir Büyük Dil Modeli (LLM) projesinin yaşam döngüsündeki üç kritik aşamanın - <strong>Sıfırdan Eğitim</strong>, <strong>İnce Ayar</strong> ve <strong>Çıkarım</strong> - yaklaşık hesaplama ve token maliyetlerini modellemenize yardımcı olur. Parametrelerle oynayarak maliyetlerin nasıl değiştiğini keşfedin.",
            language_label: "Dil:",
            pretrain_title: "1. Sıfırdan Model Eğitimi (Pre-training)",
            pretrain_desc: "Bu aşama, bir LLM'in doğuşudur. Modeli, internetin devasa bir kopyası gibi düşünebileceğiniz milyarlarca token'lık veriyle beslersiniz. Amaç, ona dilin yapısını, anlamsal ilişkileri ve dünya hakkındaki genel bilgileri öğretmektir. Tıpkı bir çocuğa konuşmayı ve dünyayı anlamayı öğretmek gibi, bu da en maliyetli ve uzun süreçtir.",
            model_params_label: "Model Parametre Sayısı:",
            training_data_label: "Eğitim Veri Seti Büyüklüğü (Token):",
            estimated_compute_cost: "Tahmini Hesaplama Maliyeti:",
            total_flops_label: "Toplam Veri İşleme Yükü (FLOPs):",
            flops_formula: "<em>Formül: FLOPs ≈ 6 x Parametre Sayısı x Token Sayısı</em>",
            why_flops_title: "Neden Önemli? (FLOPs Nedir?)",
            why_flops_desc: "FLOPs (Saniyedeki Kayan Nokta İşlemleri), bir bilgisayarın ne kadar \"düşündüğünü\" ölçer. Bir binadaki toplam tuğla sayısı gibidir. Bu sayı, modeli eğitmek için gereken saf hesaplama gücünü gösterir ve doğrudan enerji, zaman ve donanım maliyetine dönüşür.",
            comparison_label: "Karşılaştırma:",
            pretrain_comparison_text: "Bu, GPT-3 (175B) modelini eğitmek için harcanan gücün yaklaşık %{percentage}'ine denktir.",
            finetune_title: "2. Mevcut Modeli İnce Ayarlama (Fine-Tuning)",
            finetune_desc: "Sıfırdan eğitilmiş genel amaçlı bir modeli, özel bir görev için uzmanlaştırma işlemidir. Genel bilgiye sahip bir mezunu, hukuk veya tıp gibi belirli bir alanda eğitmek gibidir. Kendi özel veri setinizi kullanarak modelin davranışını, stilini veya bilgi tabanını özelleştirirsiniz.",
            finetune_data_label: "İnce Ayar Veri Seti Büyüklüğü (Token):",
            epochs_label: "Epoch Sayısı:",
            method_label: "Yöntem:",
            full_finetune_label: "Tam İnce Ayar",
            peft_lora_label: "PEFT (LoRA)",
            estimated_cost: "Tahmini Maliyet:",
            total_tokens_processed_label: "İşlenecek Toplam Token:",
            why_full_finetune_title: "Neden Önemli? (Tam İnce Ayar)",
            why_full_finetune_desc: "Tüm modelin milyarlarca parametresini güncellersiniz. Bu, modelin temel davranışını derinden değiştirebilir ancak çok fazla hesaplama gücü ve bellek (VRAM) gerektirir. Modelin veri setini <span id=\"epoch-display\">{epochs}</span> kez görmesi gerekir.",
            lora_desc: "LoRA, modelin orijinal ağırlıklarını dondurur ve sadece küçük, eğitilebilir \"adaptör\" katmanları ekler. Bu, beynin ana yapısını değiştirmek yerine, üzerine yapışkan notlar ekleyerek yeni bilgiler öğrenmek gibidir. Bu nedenle, tam ince ayara göre <strong>~%99 daha az hesaplama gücü</strong> gerektirir ve çok daha hızlıdır.",
            inference_title: "3. API Çağrısı ve Çıkarım Maliyeti",
            inference_desc: "Bu, eğitilmiş modeli fiilen kullanma aşamasıdır. Modele bir soru sorduğunuz (girdi/prompt) ve ondan bir cevap aldığınız (çıktı/completion) her an bir çıkarım işlemidir. Maliyet, konuşmanızın toplam uzunluğuna (hem sizin söyledikleriniz hem de modelin söyledikleri) bağlıdır ve genellikle token başına ücretlendirilir.",
            prompt_label: "Girdi Metni (Prompt):",
            inference_placeholder: "Yapay zeka, günümüz teknolojisinin en heyecan verici alanlarından biridir.",
            output_length_label: "Beklenen Çıktı Uzunluğu (Token):",
            token_cost_label: "Token Maliyeti:",
            input_tokens_label: "Girdi Token Sayısı:",
            output_tokens_label: "Çıktı Token Sayısı:",
            total_cost_label: "Toplam Maliyet (Token):",
            why_token_cost_title: "Neden Önemli?",
            why_token_cost_desc: "Çıkarım maliyetleri, özellikle yüksek hacimli uygulamalarda hızla birikebilir. Girdi (prompt) ne kadar uzun ve detaylıysa veya istenen cevap ne kadar uzunsa, maliyet o kadar artar. Verimli prompt yazma (prompt engineering) bu maliyeti düşürmede kritiktir.",
            footer_note: "<strong>*Not:</strong> Token sayıları, yaklaşık değerlerdir. Metinlerdeki token sayısı, `metin_uzunluğu / 4` formülüyle tahmin edilmiştir. Gerçek tokenizasyon modele göre değişebilir."
        },
        en: {
            page_title: "LLM Lifecycle Cost Calculator",
            main_title: "LLM Lifecycle: Cost & Scale Calculator",
            intro_text: "This tool helps you model the approximate compute and token costs of the three critical phases of a Large Language Model (LLM) project: <strong>Pre-training</strong>, <strong>Fine-Tuning</strong>, and <strong>Inference</strong>. Play with the parameters to discover how costs change dramatically.",
            language_label: "Language:",
            pretrain_title: "1. Pre-training a Model from Scratch",
            pretrain_desc: "This is the birth of an LLM. You feed the model with a dataset of billions of tokens, which can be thought of as a huge copy of the internet. The goal is to teach it the structure of language, semantic relationships, and general world knowledge. Just like teaching a child to speak and understand the world, this is the most costly and lengthy process.",
            model_params_label: "Model Parameter Count:",
            training_data_label: "Training Dataset Size (Tokens):",
            estimated_compute_cost: "Estimated Compute Cost:",
            total_flops_label: "Total Floating Point Operations (FLOPs):",
            flops_formula: "<em>Formula: FLOPs ≈ 6 x Parameter Count x Token Count</em>",
            why_flops_title: "Why Does This Matter? (What are FLOPs?)",
            why_flops_desc: "FLOPs (Floating-point Operations Per Second) measure how much a computer 'thinks'. It's like the total number of bricks in a building. This number represents the raw computational power needed to train the model and directly translates to energy, time, and hardware costs.",
            comparison_label: "Comparison:",
            pretrain_comparison_text: "This is equivalent to ~%{percentage} of the compute used to train the original GPT-3 (175B) model.",
            finetune_title: "2. Fine-Tuning an Existing Model",
            finetune_desc: "This is the process of specializing a general-purpose model, trained from scratch, for a specific task. It's like training a graduate with general knowledge in a specific field like law or medicine. You use your own custom dataset to tailor the model's behavior, style, or knowledge base.",
            finetune_data_label: "Fine-Tuning Dataset Size (Tokens):",
            epochs_label: "Number of Epochs:",
            method_label: "Method:",
            full_finetune_label: "Full Fine-Tuning",
            peft_lora_label: "PEFT (LoRA)",
            estimated_cost: "Estimated Cost:",
            total_tokens_processed_label: "Total Tokens to be Processed:",
            why_full_finetune_title: "Why Does This Matter? (Full Fine-Tuning)",
            why_full_finetune_desc: "You update all the billions of parameters of the model. This can deeply change the model's core behavior but requires a lot of compute power and memory (VRAM). The model needs to see the dataset <span id=\"epoch-display\">{epochs}</span> times.",
            lora_desc: "LoRA freezes the model's original weights and adds only small, trainable 'adapter' layers. It's like learning new information by adding sticky notes to a textbook instead of rewriting the whole book. This is why it requires <strong>~99% less compute power</strong> and is much faster than full fine-tuning.",
            inference_title: "3. API Call and Inference Cost",
            inference_desc: "This is the stage of actually using the trained model. Every time you ask the model a question (input/prompt) and receive an answer (output/completion), it's an inference operation. The cost depends on the total length of your conversation (both what you say and what the model says) and is usually billed per token.",
            prompt_label: "Input Text (Prompt):",
            inference_placeholder: "Artificial intelligence is one of the most exciting fields in technology today.",
            output_length_label: "Expected Output Length (Tokens):",
            token_cost_label: "Token Cost:",
            input_tokens_label: "Input Tokens:",
            output_tokens_label: "Output Tokens:",
            total_cost_label: "Total Cost (Tokens):",
            why_token_cost_title: "Why Does This Matter?",
            why_token_cost_desc: "Inference costs can add up quickly, especially in high-volume applications. The longer and more detailed the input (prompt) or the longer the desired response, the higher the cost. Efficient prompt engineering is critical to reducing this cost.",
            footer_note: "<strong>*Note:</strong> Token counts are approximations. The number of tokens in text is estimated using the `text_length / 4` formula. Actual tokenization may vary depending on the model."
        },
        es: {
            page_title: "Calculadora de Coste del Ciclo de Vida de un LLM",
            main_title: "Ciclo de Vida de un LLM: Calculadora de Coste y Escala",
            intro_text: "Esta herramienta te ayuda a modelar los costes aproximados de cómputo y tokens de las tres fases críticas de un proyecto de Modelo de Lenguaje Grande (LLM): <strong>Preentrenamiento</strong>, <strong>Ajuste Fino (Fine-Tuning)</strong> e <strong>Inferencia</strong>. Juega con los parámetros para descubrir cómo los costes cambian drásticamente.",
            language_label: "Idioma:",
            pretrain_title: "1. Preentrenar un Modelo desde Cero",
            pretrain_desc: "Esta es la fase de nacimiento de un LLM. Alimentas al modelo con un conjunto de datos de miles de millones de tokens, que puede considerarse como una copia masiva de internet. El objetivo es enseñarle la estructura del lenguaje, las relaciones semánticas y el conocimiento general del mundo. Al igual que enseñar a un niño a hablar y comprender el mundo, este es el proceso más costoso y largo.",
            model_params_label: "Número de Parámetros del Modelo:",
            training_data_label: "Tamaño del Dataset de Entrenamiento (Tokens):",
            estimated_compute_cost: "Coste de Cómputo Estimado:",
            total_flops_label: "Total de Operaciones de Punto Flotante (FLOPs):",
            flops_formula: "<em>Fórmula: FLOPs ≈ 6 x N.º de Parámetros x N.º de Tokens</em>",
            why_flops_title: "¿Por Qué es Importante? (¿Qué son los FLOPs?)",
            why_flops_desc: "Los FLOPs (Operaciones de Punto Flotante por Segundo) miden cuánto 'piensa' un ordenador. Es como el número total de ladrillos en un edificio. Esta cifra representa la potencia de cálculo pura necesaria para entrenar el modelo y se traduce directamente en costes de energía, tiempo y hardware.",
            comparison_label: "Comparación:",
            pretrain_comparison_text: "Esto equivale a ~%{percentage} del cómputo utilizado para entrenar el modelo original GPT-3 (175B).",
            finetune_title: "2. Ajuste Fino (Fine-Tuning) de un Modelo Existente",
            finetune_desc: "Es el proceso de especializar un modelo de propósito general, preentrenado, para una tarea específica. Es como formar a un graduado con conocimientos generales en un campo específico como derecho o medicina. Utilizas tu propio conjunto de datos personalizado para adaptar el comportamiento, estilo o base de conocimientos del modelo.",
            finetune_data_label: "Tamaño del Dataset de Ajuste Fino (Tokens):",
            epochs_label: "Número de Épocas (Epochs):",
            method_label: "Método:",
            full_finetune_label: "Ajuste Fino Completo",
            peft_lora_label: "PEFT (LoRA)",
            estimated_cost: "Coste Estimado:",
            total_tokens_processed_label: "Total de Tokens a Procesar:",
            why_full_finetune_title: "¿Por Qué es Importante? (Ajuste Fino Completo)",
            why_full_finetune_desc: "Actualizas los miles de millones de parámetros de todo el modelo. Esto puede cambiar profundamente el comportamiento central del modelo, pero requiere una gran cantidad de potencia de cálculo y memoria (VRAM). El modelo necesita ver el dataset <span id=\"epoch-display\">{epochs}</span> veces.",
            lora_desc: "LoRA congela los pesos originales del modelo y solo añade pequeñas capas 'adaptadoras' entrenables. Es como aprender nueva información añadiendo notas adhesivas a un libro de texto en lugar de reescribir el libro entero. Por eso requiere <strong>~99% menos potencia de cálculo</strong> y es mucho más rápido que el ajuste fino completo.",
            inference_title: "3. Llamada a la API y Coste de Inferencia",
            inference_desc: "Esta es la etapa de usar el modelo entrenado. Cada vez que le haces una pregunta al modelo (entrada/prompt) y recibes una respuesta (salida/completion), es una operación de inferencia. El coste depende de la longitud total de tu conversación (tanto lo que dices tú como lo que dice el modelo) y generalmente se factura por token.",
            prompt_label: "Texto de Entrada (Prompt):",
            inference_placeholder: "La inteligencia artificial es uno de los campos más emocionantes de la tecnología actual.",
            output_length_label: "Longitud de Salida Esperada (Tokens):",
            token_cost_label: "Coste en Tokens:",
            input_tokens_label: "Tokens de Entrada:",
            output_tokens_label: "Tokens de Salida:",
            total_cost_label: "Coste Total (Tokens):",
            why_token_cost_title: "¿Por Qué es Importante?",
            why_token_cost_desc: "Los costes de inferencia pueden acumularse rápidamente, especialmente en aplicaciones de alto volumen. Cuanto más larga y detallada sea la entrada (prompt) o más larga sea la respuesta deseada, mayor será el coste. La ingeniería de prompts eficiente es fundamental para reducir este coste.",
            footer_note: "<strong>*Nota:</strong> El número de tokens es una aproximación. Se estima usando la fórmula `longitud_texto / 4`. La tokenización real puede variar según el modelo."
        }
    };

    const langSwitcher = document.getElementById('lang-switcher');

    function setLanguage(lang) {
        const lang_dict = translations[lang];
        if (!lang_dict) return;

        document.querySelectorAll('[data-translate-key]').forEach(el => {
            const key = el.dataset.translateKey;
            if (lang_dict[key]) {
                el.innerHTML = lang_dict[key];
            }
        });
        
        document.querySelectorAll('[data-translate-key-placeholder]').forEach(el => {
            const key = el.dataset.translateKeyPlaceholder;
            if (lang_dict[key]) {
                el.placeholder = lang_dict[key];
            }
        });

        document.title = lang_dict.page_title;
        localStorage.setItem('preferredLanguage', lang);
        runAllCalculations();
    }


    function formatLargeNumber(num) {
        if (num < 1e6) return num.toLocaleString('en-US');
        return num.toExponential(2).replace('e+', 'E');
    }

    function estimateTokens(text) {
        if (!text) return 0;
        return Math.ceil(text.length / 4);
    }

    const pretrainParamsInput = document.getElementById('pretrain-params-input'); 
    const pretrainTokensInput = document.getElementById('pretrain-tokens');
    const pretrainFlopsOutput = document.getElementById('pretrain-flops');
    const pretrainComparisonOutput = document.getElementById('pretrain-comparison');

    function calculatePretrainingCost() {
        const params = parseFloat(pretrainParamsInput.value); 
        const tokens = parseFloat(pretrainTokensInput.value);
        if (isNaN(params) || isNaN(tokens)) return;

        const estimatedFlops = 6 * params * tokens;
        pretrainFlopsOutput.textContent = formatLargeNumber(estimatedFlops);
        
        const gpt3Flops = 3.14e23;
        const comparisonPercentage = (estimatedFlops / gpt3Flops) * 100;
        
        const currentLang = localStorage.getItem('preferredLanguage') || 'tr';
        const comparisonTemplate = translations[currentLang].pretrain_comparison_text;
        pretrainComparisonOutput.textContent = comparisonTemplate.replace('{percentage}', comparisonPercentage.toFixed(2));
    }

    const finetuneParamsInput = document.getElementById('finetune-params-input');
    const finetuneTokensInput = document.getElementById('finetune-tokens');
    const finetuneEpochsInput = document.getElementById('finetune-epochs');
    const finetuneMethodRadios = document.getElementsByName('finetune-method');
    const finetuneTotalTokensOutput = document.getElementById('finetune-total-tokens');
    const fullFinetuneOutputDiv = document.getElementById('finetune-full-output');
    const loraFinetuneOutputDiv = document.getElementById('finetune-lora-output');
    const fullFinetuneDesc = document.getElementById('full-finetune-desc');
    
    function calculateFinetuningCost() {
        const method = document.querySelector('input[name="finetune-method"]:checked').value;
        const currentLang = localStorage.getItem('preferredLanguage') || 'tr';
        const epochs = parseInt(finetuneEpochsInput.value, 10);
        
        if (method === 'full') {
            fullFinetuneOutputDiv.classList.remove('hidden');
            loraFinetuneOutputDiv.classList.add('hidden');
            
            const tokens = parseFloat(finetuneTokensInput.value);
            if (isNaN(tokens) || isNaN(epochs)) return;
            
            const totalTokensProcessed = tokens * epochs;
            finetuneTotalTokensOutput.textContent = totalTokensProcessed.toLocaleString('en-US');

            const descTemplate = translations[currentLang].why_full_finetune_desc;
            fullFinetuneDesc.innerHTML = descTemplate.replace('{epochs}', epochs);
        } else {
            fullFinetuneOutputDiv.classList.add('hidden');
            loraFinetuneOutputDiv.classList.remove('hidden');
        }
    }

    const inferencePromptInput = document.getElementById('inference-prompt');
    const inferenceOutputLengthInput = document.getElementById('inference-output-length');
    const inferenceInputTokensOutput = document.getElementById('inference-input-tokens');
    const inferenceOutputTokensOutput = document.getElementById('inference-output-tokens');
    const inferenceTotalTokensOutput = document.getElementById('inference-total-tokens');
    
    function updateInferenceCost() {
        const promptText = inferencePromptInput.value;
        const inputTokens = estimateTokens(promptText);
        const outputTokens = parseInt(inferenceOutputLengthInput.value, 10) || 0;
        const totalTokens = inputTokens + outputTokens;

        inferenceInputTokensOutput.textContent = inputTokens.toLocaleString('en-US');
        inferenceOutputTokensOutput.textContent = outputTokens.toLocaleString('en-US');
        inferenceTotalTokensOutput.textContent = totalTokens.toLocaleString('en-US');
    }
    
    
    function runAllCalculations() {
        calculatePretrainingCost();
        calculateFinetuningCost();
        updateInferenceCost();
    }
    
    langSwitcher.addEventListener('change', (e) => setLanguage(e.target.value));

    [
        pretrainParamsInput, 
        pretrainTokensInput, 
        finetuneParamsInput, 
        finetuneTokensInput, 
        finetuneEpochsInput, 
        inferencePromptInput, 
        inferenceOutputLengthInput
    ].forEach(el => {
        el.addEventListener('input', runAllCalculations);
    });

    finetuneMethodRadios.forEach(radio => {
        radio.addEventListener('change', runAllCalculations);
    });

    function setupPresetButtons(containerSelector, targetInput) {
        const container = document.querySelector(containerSelector);
        if (!container) return;

        container.querySelectorAll('.preset-btn').forEach(button => {
            button.addEventListener('click', () => {
                targetInput.value = button.dataset.value;
                targetInput.dispatchEvent(new Event('input', { bubbles: true }));
            });
        });
    }

    setupPresetButtons('#pretraining .param-input-group', pretrainParamsInput);
    setupPresetButtons('#finetuning .param-input-group', finetuneParamsInput);


    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.split('-')[0];
    const initialLang = savedLang || (translations[browserLang] ? browserLang : 'tr');
    
    langSwitcher.value = initialLang;
    setLanguage(initialLang);
});