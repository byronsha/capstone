class RemoveConstraintFromUsers < ActiveRecord::Migration
  def change
    change_column_null(:users, :full_name, true)
  end
end
