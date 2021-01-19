import {rankMode} from '../../src/components/rankMode/rankMode';
import '@testing-library/jest-dom'
describe('rankMode', () => {
    it('should show ranking component', () => {
      const component = rankMode().render();

      expect(component).not.toBeNull();
      expect(component.innerHTML).not.toBeNull();
    })

  it('should show header even when argument array is empty', () => {
      const component = rankMode([]).render();
      expect(component.firstChild.className).toBe("header__rank");
    })

  it('should show ranking even when array is empty', () => {
    let component = rankMode([]).render()

    const element = component.querySelector('#rank_player');
    expect(element).not.toBeNull();

  })
})