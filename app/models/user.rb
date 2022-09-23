class User < ApplicationRecord


validates :name, :age, :disease, presence: true 
end
