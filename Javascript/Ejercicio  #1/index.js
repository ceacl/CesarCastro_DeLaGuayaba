
/**
 * Autor: César Castro Lopez
 */

    const array1 = [2, 3, 4, 6];
    const array2 = [123, 67, 890, 4];
    const array3 = [2, 3, 7, 9, 4, 5, 6, 9, 12];
    
    function myFunction (arr)
    {
    
        let counter = 0;
        let newArr = []; 
    
        for(let i = 0; i < arr.length; i++ )
        {
            counter = 1;
    
            for(let j = 0; j < arr.length; j++)
            {
                if(arr[i] !== arr[j])
                {
                    counter = counter * arr[j];
                }
            }
            newArr.push(counter);
        }
    
        return newArr;
    }
    
    function printArrs()
    {
        console.log(myFunction(array1));
        console.log(myFunction(array2));
        console.log(myFunction(array3));
        
    }

