class Busqueda extends Component {
  handleClick() {
    console.log('Se hizo click');
  }
  render() {
    return <button onClick={() => this.handleClick()}>Clickéame</button>;
  }
}