class AddImageUrltoUsers < ActiveRecord::Migration
  def change
    add_column :users, :profile_img_url, :string
  end
end
