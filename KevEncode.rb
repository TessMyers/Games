# Kevin and I made this!
# encode it:
def encode
  new = []
  puts "what would you like to encode?"
  text = gets.chomp
  text.split("").each do |letter|
     nuletter = (letter.sum + 5).chr
     new.push(nuletter) 
  end
  puts new.join
end


# and now decode it!
def decode
  new = []
  puts "what would you like to decode?"
  text = gets.chomp
  text.split("").each do |letter|
     nuletter = (letter.sum - 5).chr
     new.push(nuletter) 
  end
  puts new.join
end


  
    
  