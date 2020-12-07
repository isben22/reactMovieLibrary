import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 

const { SearchBar } = Search;
const columns = [{ // this needs to be replaced with the api call
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'title',
  text: 'Title'
}, {
  dataField: 'artist',
  text: 'Artist'
}];

<ToolkitProvider
  keyField="id"
  data={ music }
  columns={ columns }
  search
>
  {
    props => (
      <div>
        <h3>Input something at below input field:</h3>
        <SearchBar { ...props.searchProps } />
        <hr />
        <BootstrapTable
          { ...props.baseProps }
        />
      </div>
    )
  }
</ToolkitProvider>