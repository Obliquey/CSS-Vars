const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.controls input');

function handleUpdate(this: HTMLInputElement) {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(item => item.addEventListener('change', handleUpdate))
inputs.forEach(item => item.addEventListener('mousemove', handleUpdate))
