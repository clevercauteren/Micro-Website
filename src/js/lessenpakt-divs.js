document.querySelectorAll('.word').forEach(word => {
    word.addEventListener('click', function() {
        const wordText = this.innerText;
        const explanationText = this.getAttribute('data-explanation');
        const explanationDiv = document.getElementById('explanation');
        const overlay = document.getElementById('overlay');
        
        document.getElementById('word-title').innerText = wordText;
        document.getElementById('word-explanation').innerText = explanationText;
        explanationDiv.style.display = 'block';
        overlay.style.display = 'block';
    });
});

document.getElementById('overlay').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('explanation').style.display = 'none';
});