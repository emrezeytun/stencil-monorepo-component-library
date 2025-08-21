const meta = {
  title: 'Debug/SimpleTest',
  render: () => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h1>Simple Test</h1>
      <p>This should work without any component loader</p>
      <hello-world></hello-world>
      <script>
        console.log('Custom elements:', window.customElements);
        console.log('hello-world defined:', window.customElements.get('hello-world'));
      </script>
    `;
    return div;
  },
};

export default meta;

export const Test = {};
