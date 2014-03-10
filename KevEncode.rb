# encrypt it:
def encrypt
  puts "what would you like to encrypt?"
  text = gets.chomp
  encrypt = text.split("").collect {|letter| (letter.sum + 5).chr}
  puts encrypt.join
end


# and now decrypt it!
def decrypt
  puts "what would you like to decrypt?"
  text = gets.chomp
  decrypt = text.split("").collect {|letter| (letter.sum - 5).chr}
  puts decrypt.join
end


  
    
  