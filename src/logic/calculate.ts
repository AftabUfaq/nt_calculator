
import promptQuestions from '../';
import AnswersI from '../ts/interfaces';
import { ShowReponse } from '../utils/index';

export const performCalculation = ({
  first_num,
  operation,
  second_num
}: AnswersI) => {
  let result = 0;
  switch (operation) {
    case 'ADD':
      result = first_num + second_num;
      ShowReponse(result);
      return promptQuestions();

    case 'SUBTRACT':
      result = first_num - second_num;
      ShowReponse(result);
      return promptQuestions();

    case 'MULTIPLY':
      result = first_num * second_num;
      ShowReponse(result);
      return promptQuestions();

    case 'DIVIDE':
      result = first_num / second_num;
      ShowReponse(result);
      return promptQuestions();

    case 'EXPONENTIATION':
      result = first_num ** second_num;
      ShowReponse(result);
      return promptQuestions();

    case 'MODULUS':
      result = first_num % second_num;
      ShowReponse(result);
      return promptQuestions();

    default:
      return;
  }
}