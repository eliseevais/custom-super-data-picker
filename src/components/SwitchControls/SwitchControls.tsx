import s from './SwitchControls.module.css';
import {SwitchToggle} from './SwitchToggle/SwitchToggle.tsx';

type Props = {
  showQuickSelect: boolean;
  showRecentlyUsed: boolean;
  showManualInput: boolean;
  setShowQuickSelect: (value: boolean) => void;
  setShowRecentlyUsed: (value: boolean) => void;
  setShowManualInput: (value: boolean) => void;
};

export const SwitchControls = ({
                                 showQuickSelect,
                                 showRecentlyUsed,
                                 showManualInput,
                                 setShowQuickSelect,
                                 setShowRecentlyUsed,
                                 setShowManualInput,
                               }: Props) => {
  return (
    <div className={s.switchControls}>
      <SwitchToggle
        label="Quick Select"
        checked={showQuickSelect}
        onChange={() => setShowQuickSelect(!showQuickSelect)}
      />
      <SwitchToggle
        label="Recently Used"
        checked={showRecentlyUsed}
        onChange={() => setShowRecentlyUsed(!showRecentlyUsed)}
      />
      <SwitchToggle
        label="Manual Input"
        checked={showManualInput}
        onChange={() => setShowManualInput(!showManualInput)}
      />
    </div>
  );
};
