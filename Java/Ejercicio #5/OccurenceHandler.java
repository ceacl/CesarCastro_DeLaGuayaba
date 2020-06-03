/**
Autor: César Castro Lopez
*/

public class OccurenceHandler {
    
    
  public OccurenceHandler (){}

  public String OccurrenceArr(int arr[])
  {
      int index = 0;
      int count = 0;
      int maxCount = 0;
      
      for(int i = 0;  i < arr.length; i++)
      {
    
          for(int j = 0; j < arr.length; j++)
          {
              if(arr[i] == arr[j])
              {
                   count++; 
              } 
          }
          
              if(count > maxCount)
               {
                maxCount = count;
                index = arr[i];
               }
              
           count = 0;
      }


      return "Ocurrencias: "+maxCount+ " Numero: " + index;
  }

    
}
