/**
 * Autor: César Castro Lopez 
 */

function factorial (num) 
{
    let counter = 1;

    for(let i = num;  i > 0; i --)
    {
        counter = counter * i;   
    }

    return counter;
}

function printFactorial(num) 
{

  for(let i = 0; i <= num; i++)
  {
      console.log(i+ "! = "+factorial(i));
  }

}
