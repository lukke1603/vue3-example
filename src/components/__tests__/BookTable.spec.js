import { shallowMount } from '@vue/test-utils';
import BookTable from '..//BookTable.vue';

let wrapper;

const items = [
  { id: 1, name: 'Clean Code', author: 'Uncle Bob' },
  { id: 2, name: 'Clean Architecture', author: 'Uncle Bob' },
  { id: 3, name: 'Clean Coder', author: 'Uncle Bob' },
];

const headers = [
  { label: 'ID', key: 'id' },
  { label: 'Autor', key: 'author' },
  { label: 'Titel', key: 'name' },
];

beforeEach(() => {
  wrapper = shallowMount(BookTable, {
    props: {
      items,
      headers,
    },
  });
});

describe('BookTable', () => {
  it('should render Table', () => {
    expect(wrapper.find('table').exists()).toBeTruthy();
  });

  it('should render all items', () => {
    const rows = wrapper.findAll('table tbody tr');

    expect(rows.length).toBe(items.length);
  });

  it('should render all headings', () => {
    const columns = wrapper.findAll('table thead tr th');

    expect(columns.length).toBe(headers.length);
    headers.forEach((header, i) => {
      expect(columns[i].text()).toBe(header.label);
    });
  });

  it('should render all Columns', () => {
    const rows = wrapper.findAll('table tbody tr');

    for((row, i) of rows) {
      const cols = row.findAll('td');

      for((col, j) of cols) {
        expect(col.text()).toBe(
          items[i][headers[j].key]
        )
      }
    }
  });
});
