document.addEventListener('DOMContentLoaded', () => {
    // Estilos em JavaScript (Teste)
    const styles = {
        body: {
            display: 'grid',
            placeItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#1c232b',
            color: '#E6EAEF',
            accentColor: '#0e76a8',
            fontFamily: 'system-ui, sans-serif',
            lineHeight: '1.5'
        },
        '.btn': {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #384656',
            borderRadius: '4px',
            padding: '0.6em 1.4em',
            backgroundColor: 'transparent',
            color: '#E6EAEF',
            fontWeight: '600',
            lineHeight: '1',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            cursor: 'pointer'
        },
        '.btn:hover, .btn:focus-visible': {
            backgroundColor: '#28323E'
        },
        '.quiz': {
            display: 'grid',
            gap: '1rem',
            width: 'min(100% - 1rem, 40rem)',
            marginBlock: '2rem',
            padding: '1rem',
            border: '1px solid #384656',
            borderRadius: '4px'
        },
        '#quiz-container': {
            display: 'grid',
            gap: '1rem'
        },
        '.quiz__answers': {
            display: 'grid',
            gap: '0.5rem'
        },
        '.quiz__container-img': {
            display: 'flex',
            justifyContent: 'center',
            height: '100px'
        },
        '.quiz__answer': {
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            paddingInline: '0.5em',
            borderRadius: '4px',
            border: '1px solid #384656',
            overflow: 'hidden'
        },
        '.quiz__dificuldade': {
            marginBottom: '15px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #384656',
            borderRadius: '4px',
            padding: '0.6em 1.2em',
            backgroundColor: '#28323E',
            color: '#E6EAEF',
            fontWeight: '600',
            lineHeight: '1',
            textTransform: 'uppercase'
        },
        '.quiz__answer:hover, .quiz__answer:focus-within': {
            backgroundColor: '#51657B'
        },
        'input[type="radio"]': {
            opacity: '0'
        },
        '.quiz__answer > label': {
            padding: '0.5em 1em'
        },
        '.quiz__question': {
            marginBottom: '10px'
        },
        '.quiz__info': {
            display: 'grid',
            gap: '0.5rem',
            alignItems: 'center',
            justifyItems: 'center'
        },
        '@media (min-width: 30em)': {
            '.quiz__info': {
                justifyItems: 'start',
                gridTemplateColumns: '1fr auto'
            }
        },
        '.quiz__time': {
            fontFamily: 'monospace'
        },
        '.hide': {
            display: 'none'
        }
    };

    // Aplicar os estilos aos elementos
    function applyStyles() {
        for (const selector in styles) {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                Object.assign(element.style, styles[selector]);
            });
        }
    }

    applyStyles();
});
