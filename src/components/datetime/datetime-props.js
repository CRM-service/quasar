import { isDate } from '../../utils/is'
import locale from '../../utils/locale'

export const modelValidator = v => {
  const type = typeof v
  return (
    v === null || v === undefined ||
    type === 'number' || type === 'string' ||
    isDate(v)
  )
}

export const inline = {
  value: {
    validator: modelValidator,
    required: true
  },
  type: {
    type: String,
    default: 'date',
    validator (value) {
      return ['date', 'time', 'datetime'].includes(value)
    }
  },
  color: {
    type: String,
    default: 'primary'
  },
  min: {
    validator: modelValidator,
    default: null
  },
  max: {
    validator: modelValidator,
    default: null
  },
  monthNames: {
    type: Array,
    default: () => locale.monthNames
  },
  shortMonthNames: {
    type: Array,
    default: () => locale.shortMonthNames
  },
  dayNames: {
    type: Array,
    default: () => locale.dayNames
  },
  shortDayNames: {
    type: Array,
    default: () => locale.shortDayNames
  },
  mondayFirst: {
    type: Boolean,
    default: () => locale.mondayFirst
  },
  saturdayFirst: {
    type: Boolean,
    default: () => locale.saturdayFirst
  },
  format24h: {
    type: Boolean,
    default: () => locale.timeFormat24h
  }
}

export const input = {
  format: String,
  noClear: Boolean,
  placeholder: String,
  clearLabel: {
    type: String,
    default: () => locale.buttons.clear
  },
  okLabel: {
    type: String,
    default: () => locale.buttons.set
  },
  cancelLabel: {
    type: String,
    default: () => locale.buttons.cancel
  }
}
