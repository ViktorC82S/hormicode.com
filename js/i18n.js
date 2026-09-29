/**
 * @description Language Handler (EN / ES)
 *
 * English lives directly in index.html (default, and what search engines see).
 * Spanish lives in the ES dictionary below. Values are HTML (innerHTML).
 *
 * To add or change a text:
 *   1. Put the English text in the HTML with data-i18n="some_key"
 *      (or data-i18n-attr="attr:some_key;attr2:other_key" for attributes).
 *   2. Add the Spanish translation for "some_key" in ES.
 *   If a key is missing in ES, the English text stays.
 *
 * Language priority: ?lang=es|en in the URL > saved choice > English.
 *
 * @author Victor Castro
 *
 * @version 2.0 09/28/2026
 * @since   1.0 09/28/2026
 */

(function () {
    const STORAGE_KEY = 'hormicode-lang';
    const DEFAULT_LANG = 'en';
    const root = document.documentElement;

    const ES = {
        meta_title: 'Hormicode — Diagnóstico, reparación y modernización de software',
        meta_desc: 'Hormicode ayuda a pequeñas y medianas empresas a recuperar el control de su software: diagnosticamos, reparamos y mejoramos los sistemas que ya usas, sin detener tu negocio.',

        nav_services: 'Servicios', nav_work: 'Caso real', nav_process: 'Cómo trabajamos', nav_faq: 'Preguntas',
        nav_contact: 'Contacto', nav_cta: 'Conversemos',
        lang_code: 'EN', lang_title: 'Switch to English', theme_title: 'Claro / Oscuro',

        hero_eyebrow: 'Diagnóstico · Reparación · Modernización',
        hero_title: 'Recupera el control<br>de <span class="grad">tu software.</span>',
        hero_lead: 'Diagnosticamos los sistemas y aplicaciones web que tu empresa ya usa, reparamos lo que falla y mejoramos lo que frena la operación, sin detener el negocio.',
        hero_cta1: 'Cuéntanos sobre tu sistema', hero_cta2: 'Ver servicios',
        trust1: 'Más de 10 años desarrollando sistemas de gestión', trust2: 'Sin empezar de cero', trust3: 'Inglés y español',

        mk_url: 'reporte-diagnostico', mk_k: 'Diagnóstico técnico', mk_v: 'Tu sistema actual', mk_status: 'En curso',
        mk_r1: 'Servidor', mk_r2: 'Base de datos', mk_r3: 'Código', mk_r4: 'Seguridad', mk_r5: 'Rendimiento',
        mk_ok: 'Revisado', mk_review: 'En revisión',
        mk_perf: 'Tiempo de carga — caso real', mk_before: 'Antes', mk_after: 'Después',

        pain_eyebrow: '¿Te suena familiar?',
        pain_title: 'Cuando el software empieza a frenar el negocio',
        pain1_t: 'Es lento', pain1_d: 'Pantallas que tardan segundos, o minutos, en cargar, y un equipo que espera en lugar de trabajar.',
        pain2_t: 'Falla constantemente', pain2_d: 'Errores que se repiten, soluciones improvisadas que nadie recuerda y miedo a tocar cualquier cosa.',
        pain3_t: 'Ya no se adapta', pain3_d: 'El negocio creció y cambió, pero el sistema se quedó igual.',
        pain_foot: 'No necesitas empezar de cero. Necesitas a alguien que entienda <strong>el sistema completo</strong>.',

        srv_eyebrow: 'Servicios',
        srv_title: 'Qué hacemos con el sistema que ya tienes',
        srv_lead: 'Trabajo práctico sobre tu software actual: desde un diagnóstico puntual hasta soporte y desarrollo continuo.',
        s1_t: 'Diagnóstico técnico', s1_d: 'Revisión completa de tu sistema: código, base de datos, servidor, seguridad y rendimiento, con hallazgos claros y priorizados.',
        s2_t: 'Reparación de fallas y deuda técnica', s2_d: 'Corregimos lo que falla y ordenamos lo que hace que cada cambio sea lento y riesgoso.',
        s3_t: 'Mejoras y módulos nuevos', s3_d: 'Nuevas funciones construidas sobre el sistema que ya usas, sin reemplazarlo.',
        s4_t: 'Modernización gradual', s4_d: 'Llevamos aplicaciones antiguas a una API y un frontend modernos paso a paso, sin empezar de cero.',
        s5_t: 'Integraciones', s5_d: 'Pasarelas de pago, mensajería, telefonía IP y software de terceros, conectados a tu sistema.',
        s6_t: 'Automatización y asistentes con IA', s6_d: 'Automatizamos procesos repetitivos y agregamos asistentes con IA donde realmente ahorran tiempo.',

        work_eyebrow: 'Caso real',
        work_title: 'Un grupo de clínicas de cirugía estética y odontología en Florida',
        work_lead: 'Soporte y desarrollo continuo de los sistemas de las clínicas: CRM, facturación, pagos, campañas y comunicación con pacientes.',
        st1: 'cambios documentados', st2: 'de carga, antes entre 8 y 60 s', st3: 'años desarrollando sistemas de gestión',

        f1_eyebrow: 'Modernización gradual',
        f1_title: 'Lo nuevo y lo heredado, funcionando a la vez',
        f1_lead: 'En lugar de reescribir todo con riesgo, el sistema heredado avanza paso a paso hacia una API REST y un frontend moderno. Los dos conviven en producción, así las clínicas no dejan de trabajar.',
        f1_b1: 'Nueva API REST sobre los datos existentes', f1_b2: 'Frontend moderno, pantalla por pantalla', f1_b3: 'Cada cambio documentado',
        ar_old: 'Sistema heredado', ar_old_s: 'Sigue atendiendo usuarios',
        ar_api: 'API REST', ar_api_s: 'Los mismos datos del negocio',
        ar_new: 'Frontend moderno', ar_new_s: 'Más rápido y fácil de cambiar',
        ar_badge: 'Ambos en producción',

        f2_eyebrow: 'Lo que hemos construido',
        f2_title: 'Módulos e integraciones para la operación diaria',
        f2_lead: 'Además de reparar y acelerar, construimos lo que las clínicas necesitan, conectado al sistema que ya usan.',
        f2_b1: 'Pantallas que tardaban entre 8 y 60 segundos ahora cargan en menos de 2',
        f2_b2: 'Módulo dental con odontograma, integrado con el software de gestión de la clínica',
        f2_b3: 'Plataforma propia de campañas de email sobre AWS',
        t1: 'Odontograma dental', t2: 'Campañas de email · AWS', t3: 'Impresión de cheques en el CRM', t4: 'Pagos en línea',
        t5: 'Mensajería', t6: 'Telefonía IP', t7: 'Publicidad digital', t8: 'Asistentes con IA',

        pr_eyebrow: 'Cómo trabajamos',
        pr_title: 'Entender el sistema completo antes de tocar nada',
        pr_lead: 'Servidor, base de datos, código y las personas que lo usan. Así empieza cada proyecto.',
        p1_t: 'Diagnosticar', p1_d: 'Revisamos el sistema completo y te damos una visión clara: qué falla, qué está en riesgo y qué es lo más importante.',
        p2_t: 'Estabilizar', p2_d: 'Primero se corrigen las fallas críticas, para que el negocio vuelva a funcionar de forma confiable.',
        p3_t: 'Mejorar y modernizar', p3_d: 'Mejoras graduales y módulos nuevos, entregados sin detener la operación.',

        ab_eyebrow: 'Detrás de Hormicode',
        ab_role: 'Fundador · Ingeniero informático',
        ab_p1: 'Más de 10 años desarrollando sistemas de gestión: CRM, facturación, inventario, pagos, campañas y comunicación con clientes.',
        ab_p2: 'Empecé en electrónica, soporte técnico y redes, y de ahí me quedó una forma de trabajar: entender el sistema completo (servidor, base de datos, código y las personas que lo usan) antes de tocar nada.',
        ab_linkedin: 'Ver perfil de LinkedIn',
        path1_t: 'Electrónica y soporte técnico', path1_s: 'Hardware, reparación y diagnóstico de fallas',
        path2_t: 'Redes', path2_s: 'Infraestructura y servidores',
        path3_t: 'Sistemas de gestión · 10+ años', path3_s: 'CRM, facturación, inventario, pagos',
        path4_s: 'Soporte y desarrollo para pequeñas y medianas empresas',

        faq_eyebrow: 'Preguntas frecuentes', faq_title: 'Lo que más nos preguntan',
        q1: '¿Tengo que reemplazar mi sistema actual?',
        a1: 'No. Nuestro enfoque es reparar, mejorar y modernizar lo que ya tienes. Reescribir desde cero es caro y riesgoso; solo lo recomendamos cuando realmente tiene sentido.',
        q2: '¿Pueden trabajar sobre un sistema que hizo otra persona?',
        a2: 'Sí, es la mayor parte de nuestro trabajo. Empezamos con un diagnóstico para entender el código, la base de datos y el servidor antes de hacer cambios.',
        q3: '¿Mi negocio tiene que detenerse mientras trabajan?',
        a3: 'No. Los cambios se planifican y se entregan de forma gradual para que la operación siga funcionando.',
        q4: '¿Trabajan en inglés y español?',
        a4: 'Sí. Puedes hablar con nosotros y recibir la documentación en cualquiera de los dos idiomas.',

        ct_eyebrow: 'Conversemos',
        ct_title: '¿Tu sistema es lento, falla o ya no se adapta a tu negocio?',
        ct_lead: 'Cuéntanos qué está pasando: qué hace el sistema, qué duele y qué te gustaría cambiar. Te respondemos con los próximos pasos.',
        ct_email: 'Escríbenos', ct_email_sub: 'En español o inglés',
        ct_li_sub: 'Envía un mensaje o conecta',
        ct_mailto: 'mailto:hormicodellc@gmail.com?subject=Hormicode%20-%20Consulta%20de%20proyecto'
    };

    const DICTIONARIES = { es: ES };

    const textEls = document.querySelectorAll('[data-i18n]');
    const attrEls = document.querySelectorAll('[data-i18n-attr]');

    function parseAttrs(el) {
        return el.dataset.i18nAttr.split(';').map(pair => {
            const [attr, key] = pair.split(':');
            return { attr: attr.trim(), key: key.trim() };
        });
    }

    // Guardar el inglés original del HTML para poder volver a él
    const originals = new Map();
    textEls.forEach(el => originals.set(el, { html: el.innerHTML }));
    attrEls.forEach(el => {
        const saved = originals.get(el) || {};
        parseAttrs(el).forEach(({ attr }) => { saved[attr] = el.getAttribute(attr) ?? ''; });
        originals.set(el, saved);
    });

    function applyLang(lang) {
        const dict = DICTIONARIES[lang] || {};

        textEls.forEach(el => {
            el.innerHTML = dict[el.dataset.i18n] ?? originals.get(el).html;
        });

        attrEls.forEach(el => {
            parseAttrs(el).forEach(({ attr, key }) => {
                el.setAttribute(attr, dict[key] ?? originals.get(el)[attr]);
            });
        });

        root.setAttribute('lang', lang);
    }

    function setLang(lang) {
        applyLang(lang);
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage unavailable */ }
    }

    function initialLang() {
        const fromUrl = new URLSearchParams(window.location.search).get('lang');
        if (fromUrl === 'en' || fromUrl === 'es') return fromUrl;
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved === 'en' || saved === 'es') return saved;
        } catch (e) { /* storage unavailable */ }
        return DEFAULT_LANG;
    }

    const start = initialLang();
    if (start !== DEFAULT_LANG) applyLang(start);

    document.getElementById('langToggle')?.addEventListener('click', () => {
        setLang(root.getAttribute('lang') === 'es' ? 'en' : 'es');
    });
})();
