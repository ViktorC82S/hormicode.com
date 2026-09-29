/**
 * @description Language Handler (EN / ES)
 *
 * English lives directly in index.html (default, and what search engines see).
 * Spanish lives in the ES dictionary below.
 *
 * To add or change a text:
 *   1. Put the English text in the HTML with data-i18n="some.key"
 *      (or data-i18n-attr="attr:some.key;attr2:other.key" for attributes).
 *   2. Add the Spanish translation for "some.key" in ES.
 *
 * Language priority: ?lang=es|en in the URL > saved choice > English.
 *
 * @author Victor Castro
 *
 * @version 1.0 09/28/2026
 * @since   1.0 09/28/2026
 */

(function () {
    const STORAGE_KEY = 'hormicode-lang';
    const DEFAULT_LANG = 'en';
    const root = document.documentElement;

    const ES = {
        'meta.title': 'Hormicode — Diagnóstico, reparación y modernización de software',
        'meta.description': 'Hormicode ayuda a pequeñas y medianas empresas a recuperar el control de su software: diagnosticamos, reparamos y mejoramos los sistemas que ya usas, sin detener tu negocio.',

        'nav.services': 'Servicios',
        'nav.work': 'Caso real',
        'nav.process': 'Cómo trabajamos',
        'nav.about': 'Acerca de',
        'nav.contact': 'Contacto',
        'lang.switch': 'EN',
        'lang.aria': 'Switch to English',
        'theme.dark': 'Activar modo oscuro',
        'theme.light': 'Activar modo claro',

        'hero.eyebrow': 'Soporte y desarrollo de software para pequeñas y medianas empresas',
        'hero.title': 'Recupera el control de tu software.',
        'hero.subtitle': 'Diagnosticamos los sistemas y aplicaciones web que tu empresa ya usa, reparamos lo que falla y mejoramos lo que frena la operación, sin detener el negocio.',
        'hero.cta': 'Conversemos',
        'hero.cta2': 'Ver servicios',
        'hero.note': 'Atendemos en inglés y español.',

        'pains.title': '¿Te suena familiar?',
        'pains.1.title': 'Es lento',
        'pains.1.text': 'Pantallas que tardan segundos, o minutos, en cargar, y un equipo que espera en lugar de trabajar.',
        'pains.2.title': 'Falla constantemente',
        'pains.2.text': 'Errores que se repiten, soluciones improvisadas que nadie recuerda y miedo a tocar cualquier cosa.',
        'pains.3.title': 'Ya no se adapta',
        'pains.3.text': 'El negocio creció y cambió, pero el sistema se quedó igual.',
        'pains.footer': 'No necesitas empezar de cero. Necesitas a alguien que entienda el sistema completo.',

        'services.eyebrow': 'Servicios',
        'services.title': 'Qué hacemos',
        'services.subtitle': 'Trabajo práctico sobre el software que ya tienes.',
        's1.title': 'Diagnóstico técnico',
        's1.text': 'Revisión completa de tu sistema actual: código, base de datos, servidor, seguridad y rendimiento, con hallazgos claros y priorizados.',
        's2.title': 'Reparación de fallas y deuda técnica',
        's2.text': 'Corregimos lo que falla y ordenamos lo que hace que cada cambio sea lento y riesgoso.',
        's3.title': 'Mejoras y módulos nuevos',
        's3.text': 'Nuevas funciones construidas sobre el sistema que ya usas, sin reemplazarlo.',
        's4.title': 'Modernización gradual',
        's4.text': 'Llevamos aplicaciones antiguas a una API y un frontend modernos paso a paso, con lo viejo y lo nuevo conviviendo en producción.',
        's5.title': 'Integraciones',
        's5.text': 'Pasarelas de pago, mensajería, telefonía IP y software de terceros, conectados a tu sistema.',
        's6.title': 'Automatización y asistentes con IA',
        's6.text': 'Automatizamos procesos repetitivos y agregamos asistentes con IA donde realmente ahorran tiempo.',

        'work.eyebrow': 'Caso real',
        'work.title': 'Un grupo de clínicas de cirugía estética y odontología en Florida',
        'work.text': 'Soporte y desarrollo continuo de los sistemas de las clínicas: CRM, facturación, pagos, campañas y comunicación con pacientes.',
        'stat.1': 'años desarrollando sistemas de gestión',
        'stat.2': 'cambios documentados entregados',
        'stat.3': 'tiempo de carga de pantallas tras la optimización',
        'work.1': 'Modernización gradual de un sistema heredado hacia una API REST y un frontend moderno, los dos conviviendo en producción.',
        'work.2': 'Rendimiento: pantallas que tardaban entre 8 y 60 segundos ahora cargan en menos de 2.',
        'work.3': 'Módulo dental con odontograma, integrado con el software de gestión de la clínica.',
        'work.4': 'Plataforma propia de campañas de email sobre AWS.',
        'work.5': 'Gestión e impresión de cheques integrada al CRM.',
        'work.6': 'Pagos en línea, mensajería, telefonía IP, publicidad digital y asistentes con IA.',

        'process.eyebrow': 'Cómo trabajamos',
        'process.title': 'Entender el sistema completo antes de tocar nada.',
        'p1.title': 'Diagnosticar',
        'p1.text': 'Servidor, base de datos, código y las personas que lo usan. Obtienes una visión clara de qué falla y qué es lo más importante.',
        'p2.title': 'Estabilizar',
        'p2.text': 'Primero se corrigen las fallas críticas, para que el negocio vuelva a funcionar de forma confiable.',
        'p3.title': 'Mejorar y modernizar',
        'p3.text': 'Mejoras graduales y módulos nuevos, entregados sin detener la operación.',

        'about.eyebrow': 'Acerca de',
        'about.role': 'Fundador, Hormicode LLC · Ingeniero informático',
        'about.p1': 'Soy ingeniero informático y llevo más de 10 años desarrollando sistemas de gestión: CRM, facturación, inventario, pagos, campañas y comunicación con clientes.',
        'about.p2': 'Empecé en electrónica, soporte técnico y redes, y de ahí me quedó una forma de trabajar: entender el sistema completo (servidor, base de datos, código y las personas que lo usan) antes de tocar nada.',
        'about.linkedin': 'Conectar en LinkedIn',

        'contact.title': '¿Tu sistema es lento, falla o ya no se adapta a tu negocio?',
        'contact.text': 'Cuéntanos qué está pasando y te respondemos con los próximos pasos.',
        'contact.cta': 'Escríbenos',
        'contact.mailto': 'mailto:hormicodellc@gmail.com?subject=Hormicode%20-%20Consulta%20de%20proyecto',

        'footer.rights': 'Todos los derechos reservados.'
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
    textEls.forEach(el => originals.set(el, { text: el.textContent }));
    attrEls.forEach(el => {
        const saved = originals.get(el) || {};
        parseAttrs(el).forEach(({ attr }) => { saved[attr] = el.getAttribute(attr) ?? ''; });
        originals.set(el, saved);
    });

    function applyLang(lang) {
        const dict = DICTIONARIES[lang] || {};

        textEls.forEach(el => {
            el.textContent = dict[el.dataset.i18n] ?? originals.get(el).text;
        });

        attrEls.forEach(el => {
            parseAttrs(el).forEach(({ attr, key }) => {
                el.setAttribute(attr, dict[key] ?? originals.get(el)[attr]);
            });
        });

        root.setAttribute('lang', lang);
    }

    function setLang(lang, persist) {
        applyLang(lang);
        if (persist) {
            try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage unavailable */ }
        }
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

    document.addEventListener('click', e => {
        const btn = e.target.closest('[data-lang-toggle]');
        if (!btn) return;
        e.preventDefault();
        setLang(root.getAttribute('lang') === 'es' ? 'en' : 'es', true);
    });
})();
