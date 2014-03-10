# encrypt it:
def encode
  new = []
  puts "what would you like to encrypt?"
  text = gets.chomp
  encrypt = text.split("").collect {|letter| new << (letter.sum + 5).chr}
  puts new.join
end


# and now decrypt it!
def decode
  new = []
  puts "what would you like to decrypt?"
  text = gets.chomp
  encrypt = text.split("").collect {|letter| new << (letter.sum - 5).chr}
  puts new.join
end


  
    
  