import React from 'react';
// import products from './data.js';

class ProductCategoryRow extends React.Component {
  render() {
    return <tr><th colSpan="2">{this.props.category}</th></tr>;
  }
}

class ProductRow extends React.Component {
    render() {
      const name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    let rows = [];
    let lastCategory = null;
    this.props.products.forEach(function(product){
      if (product.name.indexOf(this.props.filterText) === -1 ||
      (!product.stocked && this.props.isStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.name} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = ::this.handleChange;
    }

  handleChange() {
    this.props.onUserInput(
      this.filterTextInput.value,
      this.inStockOnlyInput.checked
    );
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Search.." value={this.props.filterText}/>
        <p>
          <input type="checkbox" chcecked={this.props.inStockOnly}/>
          {' '}
          Only show products in stock....
        </p>
      </form>
    )
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        filtertext: "",
        inStockOnly: false
    }
  }

  render() {
    return (
      <div>
        <SearchBar
          filtertext={this.state.filterText}
          isStockOnly={this.state.inStockOnly}
        />
        <ProductTable products={this.props.products}
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    )
  }
}

export default FilterableProductTable;
