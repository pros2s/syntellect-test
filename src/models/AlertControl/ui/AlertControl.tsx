import { useAddNewButton, Buttons, Input, ButtonsControl } from 'models/ButtonsControl';
import { useCallback, useEffect } from 'react';
import { observer } from 'mobx-react';

const alertLeftButtonsStore = new Buttons();
const alertRightButtonsStore = new Buttons();
const alertInputStore = new Input();

export const AlertControl = observer(() => {
  const onLeftBtnCallback = useCallback((val: string | number) => {
    if (Number(val)) {
      alert(val);
    }
  }, []);

  const checkNumber = useAddNewButton(alertLeftButtonsStore, 'Is it number?', () =>
    onLeftBtnCallback(alertInputStore.actualValue)
  );
  const alertText = useAddNewButton(alertRightButtonsStore, 'Alert text', () =>
    alert(alertInputStore.actualValue)
  );

  useEffect(() => {
    checkNumber();
    alertText();
  }, [alertText, checkNumber]);

  return (
    <ButtonsControl
      inputStore={alertInputStore}
      leftBtnsStore={alertLeftButtonsStore}
      rightBtnsStore={alertRightButtonsStore}
    />
  );
});
