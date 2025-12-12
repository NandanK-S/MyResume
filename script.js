document.querySelectorAll('.nav-link').forEach(l => l.onclick = e => {
    e.preventDefault();
    const p = l.dataset.page;
    document.querySelectorAll('.page').forEach(x => x.classList.toggle('active', x.id === p));
    document.querySelectorAll('.nav-link').forEach(x => x.classList.toggle('active', x === l));
    window.scrollTo(0, 0);
});
function showPage(p) { document.querySelector(`.nav-link[data-page="${p}"]`).click(); }
function handleSubmit(e) {
    e.preventDefault();
    const [n, m, em] = ['name', 'message', 'email'].map(id => document.getElementById(id));
    if (n.value.trim() && em.value.trim() && m.value.trim()) {
        alert(`Thank you, ${n.value}! Message received.`);
        [n, em, m].forEach(El => El.value = '');
    } else alert('Please fill in all fields!');
}
