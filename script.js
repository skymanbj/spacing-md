document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');

    function formatText(text) {
        // Add space between Chinese characters and English letters/numbers
        text = text.replace(/([\u4e00-\u9fa5])([a-zA-Z0-9])/g, '$1 $2');
        // Add space between English letters/numbers and Chinese characters
        text = text.replace(/([a-zA-Z0-9])([\u4e00-\u9fa5])/g, '$1 $2');

        // Add space after punctuation if it is followed by an English word or number
        text = text.replace(/([,.\uff0c\u3002!?\uff1b\uff1a\uff01\uff1f])([a-zA-Z0-9])/g, '$1 $2');

        return text;
    }

    function updatePreview() {
        const rawText = editor.value;
        const formattedText = formatText(rawText);
        preview.innerHTML = marked.parse(formattedText);
    }

    editor.addEventListener('input', updatePreview);

    // Initial render
    updatePreview();
});
