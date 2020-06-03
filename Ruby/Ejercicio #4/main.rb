#Autor: César Castro Lopez

array = [1,2,1,3,3,1,2,1,5,1];
histograma =["1:","2:","3:","4:","5:"];

array.each do |index|

  if(index == 1)
    histograma[0] = histograma[0]+"*"; 
  end
    
  if(index == 2)
    histograma[1] = histograma[1]+"*"; 
  end
  
  if(index == 3)
    histograma[2] = histograma[2]+"*"; 
  end
  
  if(index == 4)
    histograma[3] = histograma[3]+"*"; 
  end

  if(index == 5)
    histograma[4] = histograma[4]+"*"; 
  end

end

puts histograma
