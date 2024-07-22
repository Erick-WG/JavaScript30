// getting all the input fields.

const inputs = document.querySelectorAll('.controls input')

// creating the function to handle the events.

function handleChange() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    // console.log(suffix)
}

inputs.forEach(input => input.addEventListener('change', handleChange))
inputs.forEach(input => input.addEventListener('mousemove', handleChange))