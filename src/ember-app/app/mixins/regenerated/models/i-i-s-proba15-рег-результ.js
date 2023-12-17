import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датРегРезСобес: DS.attr('date'),
  организация: DS.belongsTo('i-i-s-proba15-организация', { inverse: null, async: false }),
  планирСобес: DS.belongsTo('i-i-s-proba15-планир-собес', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-proba15-сотрудники', { inverse: null, async: false }),
  тЧРегРезульт: DS.hasMany('i-i-s-proba15-т-ч-рег-результ', { inverse: 'регРезульт', async: false })
});

export let ValidationRules = {
  датРегРезСобес: {
    descriptionKey: 'models.i-i-s-proba15-рег-результ.validations.датРегРезСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-proba15-рег-результ.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  планирСобес: {
    descriptionKey: 'models.i-i-s-proba15-рег-результ.validations.планирСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-proba15-рег-результ.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧРегРезульт: {
    descriptionKey: 'models.i-i-s-proba15-рег-результ.validations.тЧРегРезульт.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегРезультE', 'i-i-s-proba15-рег-результ', {
    датРегРезСобес: attr('Дата регистрации результатов собеседования', { index: 0 })
  });

  modelClass.defineProjection('РегРезультL', 'i-i-s-proba15-рег-результ', {
    датРегРезСобес: attr('Дата регистрации результатов собеседования', { index: 0 }),
    организация: belongsTo('i-i-s-proba15-организация', 'Наименование организации', {
      наименование: attr('Наименование организации', { index: 1 })
    }, { index: -1, hidden: true }),
    планирСобес: belongsTo('i-i-s-proba15-планир-собес', 'ФИО кандидата', {
      регистАнкеты: belongsTo('i-i-s-proba15-регист-анкеты', '', {
        фИОКандидата: attr('ФИО кандидата', { index: 2 }),
        вакантДолжн: belongsTo('i-i-s-proba15-вакант-должн', '', {
          должности: attr('Вакантная должность', { index: 3 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-proba15-сотрудники', 'Имя участника собеседования', {
      фИОСотруд: attr('Имя участника собеседования', { index: 4 }),
      должнСотр: belongsTo('i-i-s-proba15-должн-сотр', '', {
        должность: attr('Должность участника собеседования', { index: 5 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
